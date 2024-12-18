"use client"
import { useForm, SubmitHandler } from "react-hook-form"
 
interface RegisterForm {
   username:        string;
   password:        string;
   confirmPassword?: string;
   email:           string;
   firstName:       string;
   lastName:        string;
}

const RegisterForm = () => {

    const { 
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<RegisterForm>();

    const onRegisterSubmit: SubmitHandler<RegisterForm> = async (data) => {
        delete data.confirmPassword;
        
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Zarejestrowano użytkownika:", result);
              } else {
                console.log("Błąd rejestracji");
              }
        } catch (error) {
            console.error("Błąd przy wysyłaniu danych:", error);
        }
    };

    const password = watch("password");

    return (
        <form className="flex flex-col p-4 space-y-5" onSubmit={handleSubmit(onRegisterSubmit)}>            
            <label>
                Username*
                <input
                    maxLength={20}
                    placeholder="Enter your username"
                    {...register("username", {
                            required: "Username is required",
                        }
                    )}
                />
                {errors.username && <p>{errors.username.message}</p>}
            </label>
            
            <label>
                Password*
                <input
                    type="password"
                    maxLength={100}
                    placeholder="Create your password"
                    {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 5,
                                message: "Password must be at least 5 characters long",
                            },
                        }
                    )}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </label>

            <label>
                Confirm password*
                <input 
                    type="password"
                    placeholder="Enter your created password again"
                    {...register("confirmPassword", { 
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })
                    }
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </label>
            
            <label>
                Email*
                <input
                    placeholder="Enter your email"
                    {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            }
                        }
                    )}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </label>

            <label>
                First name*
                <input placeholder="Enter your first name" {...register("firstName", { required: "First name is required" })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </label>

            <label>
                Last name*
                <input placeholder="Enter your last name" {...register("lastName", { required: "Last name is required" })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </label>

            <button type="submit" className="sendButton">Sign Up</button>
        </form>
    );
}

export default RegisterForm;
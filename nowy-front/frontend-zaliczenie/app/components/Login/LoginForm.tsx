"use client"
import { useForm, SubmitHandler } from "react-hook-form"

interface LoginRequest {
   username: string;
   password: string;
}

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>()
    const onLoginSubmit: SubmitHandler<LoginRequest> = (data) => console.log(data)

    return (
        <form className="flex flex-col p-4 space-y-5" onSubmit={handleSubmit(onLoginSubmit)}>            
            <label>
                Username*
                <input
                    maxLength={20} 
                    placeholder="Enter your username" {...register("username", { required: "Username is required" })}
                />
                {errors.username && <p>{errors.username.message}</p>}
            </label>
            
            <label>
                Password*
                <input 
                    type="password"
                    maxLength={100}
                    placeholder="Enter your password" {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </label>
            <button type="submit" className="sendButton" onClick={handleSubmit(onLoginSubmit)}>Sign Up</button>
        </form>
    );
}

export default LoginForm;
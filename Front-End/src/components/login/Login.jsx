import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import googleImage from '../../assets/img/login/icongoogle.png';
import facebookImage from '../../assets/img/login/iconfacebook.png';
import logoImage from '../../assets/img/login/logo.png';

const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    onLogin();
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white"> 
      <div className="bg-card rounded-lg p-8 w-full max-w-md">
        <img src={logoImage} alt="Logo" className="mb-6 mx-auto" />
        <h2 className="text-lg text-manrope font-light mb-4">Iniciar sesión con correo electrónico</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-primary"></label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'El correo electrónico es obligatorio' })}
              className={`w-full px-3 py-2 rounded-lg bg-input text-primary border border-border focus:outline-none focus:ring focus:ring-ring ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Correo electrónico"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-primary"></label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} 
                id="password"
                {...register('password', { required: 'La contraseña es obligatoria' })}
                className={`w-full px-3 py-2 rounded-lg bg-input text-primary border border-border focus:outline-none focus:ring focus:ring-ring ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Contraseña"
              />
              <button 
                type="button" 
                className="absolute right-2 top-2 text-muted-foreground" 
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? <EyeOff /> : <Eye />} 
              </button>
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div className="flex justify-center"> 
            <Link to="/questions">
            <button 
              type="submit" 
              className="bg-[#48B390] text-white w-[350px] px-4 py-3 rounded-full hover:bg-opacity-80"
              >
              Ingresar
            </button>
              </Link>
          </div>
        </form>
        <div className="flex items-center justify-center mt-6">
          <p className="font-manrope mr-2">¿No estás registrado?</p>
          <button onClick={handleRegisterRedirect} className="text-[#3A8F73] hover:underline font-manrope">Crea una cuenta</button>
        </div>
        <p className="text-primary text-center font-manrope">O inicia sesión con</p>
        <div className="flex justify-center mt-4 space-x-4"> 
          <img 
            src={googleImage} 
            alt="Iniciar sesión con Google" 
            className="cursor-pointer" 
            onClick={() => console.log('Iniciar sesión con Google')} 
          />
          <img 
            src={facebookImage} 
            alt="Iniciar sesión con Facebook" 
            className="cursor-pointer" 
            onClick={() => console.log('Iniciar sesión con Facebook')} 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
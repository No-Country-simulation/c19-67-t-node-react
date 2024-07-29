import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import googleImage from '../../assets/img/login/icongoogle.png';
import facebookImage from '../../assets/img/login/iconfacebook.png';

const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const onSubmit = (data) => {
    console.log(data);
    onLogin();
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirigir a la página de registro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white"> 
      <div className="bg-card rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary text-center mb-6">LOGO</h1>
        <p className="text-primary text-center mb-4">Iniciar sesión con correo electrónico</p>
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
          <div className="flex items-center justify-between mb-4"> 
            <p className="text-primary">¿Olvidaste tu contraseña?</p>
          </div>
          <div className="flex justify-center"> 
            <button 
              type="submit" 
              className="bg-[#48B390] text-white px-4 py-2 rounded-[50px] hover:bg-opacity-80 w-full mx-3" 
              style={{ margin: '15px' }} 
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex items-center justify-start mt-6">
          <p className="text-primary mr-2">¿No estás registrado?</p>
          <button onClick={handleRegisterRedirect} className="text-green-500 hover:underline">Crea una cuenta</button>
        </div>
        <p className="text-primary text-center">O inicia sesión con</p>
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




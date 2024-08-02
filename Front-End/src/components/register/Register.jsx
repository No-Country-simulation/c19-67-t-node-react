import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react'; 
import googleImage from '../../assets/img/login/icongoogle.png'; 
import facebookImage from '../../assets/img/login/iconfacebook.png'; 
import logoImage from '../../assets/img/login/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background"> {/* Centering the content */}
      <div className="flex flex-col items-center p-6">
        <div className="mb-4">
          <img aria-hidden="true" alt="logo" src={logoImage} />
        </div>
        <h2 className="text-lg font-manrope font-light">Registrarse con correo electrónico</h2>
        <form className="w-full max-w-sm mt-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-2 text-muted-foreground" htmlFor="name"></label>
          <input
            className={`w-full p-2 mb-4 border border-border rounded ${errors.name ? 'border-red-500' : ''}`}
            type="text"
            id="name"
            placeholder="Nombre"
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          
          <label className="block mb-2 text-muted-foreground" htmlFor="email"></label>
          <input
            className={`w-full p-2 mb-4 border border-border rounded ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            id="email"
            placeholder="Correo electrónico"
            {...register('email', { required: 'El correo electrónico es obligatorio' })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

          <label className="block mb-2 text-muted-foreground" htmlFor="password"></label>
          <div className="relative mb-4">
            <input
              className={`w-full p-2 border border-border rounded ${errors.password ? 'border-red-500' : ''}`}
              type={showPassword ? 'text' : 'password'} 
              id="password"
              placeholder="Contraseña"
              {...register('password', { required: 'La contraseña es obligatoria' })}
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

          <div className="flex justify-center">
            <Link to="/questions">
            <button 
              className="bg-[#48B390] text-white w-[350px] px-4 py-3 mb-4 rounded-full hover:bg-opacity-80" 
              >
              Registrarse
            </button>
              </Link>
          </div>
        </form>
        <p className="font-manrope">¿Ya tienes una cuenta? <Link to="/login" className="text-[#3A8F73] hover:underline font-manrope">Iniciar sesión</Link></p>
        <p className="mt-4 text-muted-foreground font-manrope">O regístrate con</p>
        <div className="flex space-x-4 mt-2">
          <button className="p-2 bg-zinc-200 rounded-full">
            <img aria-hidden="true" alt="Google" src={googleImage} />
          </button>
          <button className="p-2 bg-zinc-200 rounded-full">
            <img aria-hidden="true" alt="Facebook" src={facebookImage} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;



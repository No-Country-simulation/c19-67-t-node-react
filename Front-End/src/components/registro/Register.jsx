import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react'; 
import googleImage from '../../assets/img/login/icongoogle.png'; 
import facebookImage from '../../assets/img/login/iconfacebook.png'; 

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-background">
      <div className="mb-4">
        <img aria-hidden="true" alt="logo" src="https://openui.fly.dev/openui/24x24.svg?text=LOGO" />
      </div>
      <h2 className="text-lg font-semibold text-foreground">Registrarse con correo electrónico</h2>
      <form className="w-full max-w-sm mt-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2 text-muted-foreground" htmlFor="name">Nombre</label>
        <input
          className={`w-full p-2 mb-4 border border-border rounded ${errors.name ? 'border-red-500' : ''}`}
          type="text"
          id="name"
          placeholder="Nombre"
          {...register('name', { required: 'El nombre es obligatorio' })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        
        <label className="block mb-2 text-muted-foreground" htmlFor="email">Correo electrónico</label>
        <input
          className={`w-full p-2 mb-4 border border-border rounded ${errors.email ? 'border-red-500' : ''}`}
          type="email"
          id="email"
          placeholder="Correo electrónico"
          {...register('email', { required: 'El correo electrónico es obligatorio' })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        <label className="block mb-2 text-muted-foreground" htmlFor="password">Contraseña</label>
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
          <button 
            className="text-white px-4 py-2 rounded-[50px] hover:bg-opacity-80 w-full mx-3" 
            style={{ backgroundColor: '#48B390', margin: '15px' }} 
          >
            Registrarse
          </button>
        </div>
      </form>
      <p className="text-muted-foreground">¿Ya tienes una cuenta? <a href="#" className="text-primary">Iniciar sesión</a></p>
      <p className="mt-4 text-muted-foreground">O regístrate con</p>
      <div className="flex space-x-4 mt-2">
        <button className="p-2 bg-zinc-200 rounded-full">
          <img aria-hidden="true" alt="Google" src={googleImage} />
        </button>
        <button className="p-2 bg-zinc-200 rounded-full">
          <img aria-hidden="true" alt="Facebook" src={facebookImage} />
        </button>
      </div>
    </div>
  );
};

export default Register;




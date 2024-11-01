import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

import { Link, useForm } from '@inertiajs/react';
import '../../../css/login.css'
import Logo from '../../../../public/images/ALBAPAN.png';



export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>

        
            <div className="login-page"> {/* Contenedor para aplicar estilos */}

            <header className="header">
            <div className="header-container">
                

              <Link href="/"> {/* Cambia a la ruta de Welcome */}
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
     
            

              <div className="header-actions">
                <Link
                    href={route('login')}
                >
                    Iniciar Sesion
                </Link>
                 <Link
                    href={route('register')}
                >
                    Register
                </Link>
              </div>
            </div>
          </header>
                
                <title>Iniciar Sesión</title>

                {status && (
                    <div className="status-message">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="login-form">
                    <h2>Iniciar Sesión</h2>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="input"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Contraseña" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="input"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="remember-me mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                Recordarme
                            </span>
                        </label>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="forgot-password"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}

                        <PrimaryButton className="btn-login" disabled={processing}>
                            Iniciar sesión
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

import { Link, useForm } from '@inertiajs/react';
import '../../../css/registro/registro.css'
import Logo from '../../../../public/images/ALBAPAN.png';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>

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


            <title>Registro</title>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="input-field" // Cambiado para adaptarse al CSS
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="error-message" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="input-field" // Cambiado para adaptarse al CSS
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="error-message" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="input-field" // Cambiado para adaptarse al CSS
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="error-message" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="input-field" // Cambiado para adaptarse al CSS
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="error-message"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Link
                        href={route('login')}
                        className="link" // Cambiado para adaptarse al CSS
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton 
                        className="submit-button" // Cambiado para adaptarse al CSS
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}


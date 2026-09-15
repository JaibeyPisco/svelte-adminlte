<script>
	import API from '$lib/utils/API';
	import Notificacion from '$lib/utils/Notificacion';

	let showPassword = $state(false);

	let form = $state({
		username: '',
		password: ''
	});

	const passwordToggle = () => {
		showPassword = !showPassword;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		 

		let error = $state('');
		let loading = $state(false);
		try {
		   const usuarios = await API.get(
                `/usuarios?email=${encodeURIComponent(form.username)}`
            );

            const usuario = usuarios[0];
 
            console.log(usuario);

            // Notificacion('Usuario encontrado correctamente', 'success');


		} catch (error) {}
	};
</script>

<div class="login-page">
	<div class="login-container">
		<div class="login-card">
			<div class="login-header">
				<img src="/logo.png" alt="Logo" class="login-logo" />

				<h1 class="login-title">Iniciar sesión</h1>

				<p class="login-subtitle">Ingresa tus credenciales para continuar</p>
			</div>

			<form onsubmit={onSubmit}>
				<div class="login-form-group">
					<label class="login-label" for=""> Correo electrónico </label>

					<input
						type="email"
						class="login-input"
						bind:value={form.username}
						placeholder="correo@empresa.com"
					/>
				</div>

				<div class="login-form-group">
					<label class="login-label" for=""> Contraseña </label>

					<div class="login-input-wrapper">
						<input
							type={showPassword ? 'text' : 'password'}
							class="login-input login-password-input"
							placeholder="••••••••"
							bind:value={form.password}
						/>

						<button type="button" class="login-password-toggle" onclick={passwordToggle}>
							{showPassword ? 'Ocultar' : 'Ver'}
						</button>
					</div>
				</div>

				<div class="login-options">
					<label class="login-remember">
						<input type="checkbox" />
						Recordarme
					</label>

					<a href="/recuperar" class="login-forgot"> ¿Olvidaste tu contraseña? </a>
				</div>

				<button type="submit" class="login-button"> INICIAR SESIÓN </button>
			</form>

			<div class="login-footer">© 2026 Sistema</div>
		</div>
	</div>
</div>

<style>
	/* =========================
   LOGIN
========================= */

	.login-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		background: #f4f6f9;
	}

	.login-container {
		width: 100%;
		max-width: 420px;
	}

	.login-card {
		background: #ffffff;
		border-radius: 14px;
		padding: 40px;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	}

	/* =========================
   HEADER
========================= */

	.login-header {
		text-align: center;
		margin-bottom: 32px;
	}

	.login-logo {
		width: 70px;
		height: 70px;
		object-fit: contain;
		margin-bottom: 20px;
	}

	.login-title {
		margin: 0;
		font-size: 26px;
		font-weight: 600;
		color: #212529;
	}

	.login-subtitle {
		margin-top: 8px;
		font-size: 14px;
		color: #6c757d;
	}

	/* =========================
   FORM
========================= */

	.login-form-group {
		margin-bottom: 20px;
	}

	.login-label {
		display: block;
		margin-bottom: 8px;
		font-size: 14px;
		font-weight: 500;
		color: #343a40;
	}

	.login-input-wrapper {
		position: relative;
	}

	.login-input {
		width: 100%;
		height: 46px;
		padding: 0 14px;
		border: 1px solid #ced4da;
		border-radius: 8px;
		background: #fff;
		color: #212529;
		font-size: 14px;
		outline: none;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.login-input:focus {
		border-color: #0d6efd;
		box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.12);
	}

	.login-input::placeholder {
		color: #adb5bd;
	}

	/* =========================
   PASSWORD
========================= */

	.login-password-input {
		padding-right: 46px;
	}

	.login-password-toggle {
		position: absolute;
		top: 50%;
		right: 14px;
		transform: translateY(-50%);
		border: none;
		background: transparent;
		color: #6c757d;
		cursor: pointer;
		padding: 4px;
	}

	.login-password-toggle:hover {
		color: #212529;
	}

	/* =========================
   OPTIONS
========================= */

	.login-options {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24px;
	}

	.login-remember {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: #6c757d;
		cursor: pointer;
	}

	.login-remember input {
		width: 15px;
		height: 15px;
		cursor: pointer;
	}

	.login-forgot {
		font-size: 13px;
		color: #0d6efd;
		text-decoration: none;
	}

	.login-forgot:hover {
		text-decoration: underline;
	}

	/* =========================
   BUTTON
========================= */

	.login-button {
		width: 100%;
		height: 46px;
		border: none;
		border-radius: 8px;
		background: #0d6efd;
		color: #ffffff;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.login-button:hover {
		background: #0b5ed7;
	}

	.login-button:active {
		transform: translateY(1px);
	}

	.login-button:disabled {
		opacity: 0.65;
		cursor: not-allowed;
	}

	/* =========================
   ERROR
========================= */

	.login-error {
		margin-bottom: 20px;
		padding: 11px 13px;
		border-radius: 7px;
		background: #f8d7da;
		border: 1px solid #f1aeb5;
		color: #842029;
		font-size: 13px;
	}

	/* =========================
   FOOTER
========================= */

	.login-footer {
		margin-top: 28px;
		text-align: center;
		font-size: 12px;
		color: #adb5bd;
	}

	/* =========================
   RESPONSIVE
========================= */

	@media (max-width: 480px) {
		.login-page {
			padding: 16px;
		}

		.login-card {
			padding: 30px 24px;
		}

		.login-title {
			font-size: 23px;
		}

		.login-options {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
	}
</style>

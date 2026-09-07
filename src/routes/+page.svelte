<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta
			name="description"
			content="Landing page con diseño tecnológico, editorial y con identidad visual fuerte."
		/>
		<title>Landing Base — Diseño con identidad</title>

		<style>
			:root {
				--ink: #0b1220;
				--ink-2: #111b2e;
				--paper: #f4f1ea;
				--paper-2: #ebe7de;
				--white: #fffdf8;
				--line: #d6d0c4;
				--text: #273244;
				--muted: #6f7784;
				--accent: #ff6b2c;
				--accent-dark: #df4f16;
				--lime: #c9ff4a;
				--sky: #99c7ff;
				--container: 1180px;
				--shadow: 0 24px 70px rgba(11, 18, 32, 0.12);
			}

			* {
				box-sizing: border-box;
				margin: 0;
				padding: 0;
			}

			html {
				scroll-behavior: smooth;
			}

			body {
				font-family:
					'Segoe UI',
					Inter,
					ui-sans-serif,
					system-ui,
					-apple-system,
					sans-serif;
				background: var(--paper);
				color: var(--text);
				line-height: 1.6;
				overflow-x: hidden;
			}

			a {
				color: inherit;
				text-decoration: none;
			}
			button,
			input,
			textarea {
				font: inherit;
			}
			img {
				max-width: 100%;
				display: block;
			}

			.container {
				width: min(calc(100% - 36px), var(--container));
				margin-inline: auto;
			}

			.section {
				padding: 100px 0;
			}

			.kicker {
				display: inline-flex;
				align-items: center;
				gap: 10px;
				font-size: 13px;
				font-weight: 800;
				letter-spacing: 0.16em;
				text-transform: uppercase;
				color: var(--accent-dark);
				margin-bottom: 18px;
			}

			.kicker::before {
				content: '';
				width: 34px;
				height: 2px;
				background: var(--accent);
			}

			h1,
			h2,
			h3 {
				color: var(--ink);
				line-height: 1.02;
				letter-spacing: -0.045em;
			}

			h1 {
				font-size: clamp(48px, 7vw, 92px);
				max-width: 880px;
			}

			h2 {
				font-size: clamp(34px, 4.6vw, 58px);
				max-width: 760px;
			}

			h3 {
				font-size: 21px;
				letter-spacing: -0.025em;
			}

			p {
				color: var(--muted);
			}

			.btn {
				min-height: 52px;
				padding: 0 22px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				border: 1px solid transparent;
				cursor: pointer;
				transition: 0.22s ease;
				font-weight: 800;
				border-radius: 0;
			}

			.btn-primary {
				color: #fff;
				background: var(--accent);
				box-shadow: 8px 8px 0 var(--ink);
			}

			.btn-primary:hover {
				transform: translate(-2px, -2px);
				box-shadow: 11px 11px 0 var(--ink);
				background: var(--accent-dark);
			}

			.btn-ghost {
				color: var(--ink);
				border-color: var(--ink);
				background: transparent;
			}

			.btn-ghost:hover {
				background: var(--ink);
				color: white;
			}

			/* NAV */
			.header {
				position: sticky;
				top: 0;
				z-index: 50;
				background: rgba(244, 241, 234, 0.92);
				backdrop-filter: blur(16px);
				border-bottom: 1px solid var(--line);
			}

			.nav {
				min-height: 78px;
				display: grid;
				grid-template-columns: auto 1fr auto;
				align-items: center;
				gap: 30px;
			}

			.brand {
				display: flex;
				align-items: center;
				gap: 12px;
				font-weight: 950;
				color: var(--ink);
				letter-spacing: -0.04em;
				font-size: 22px;
			}

			.brand-mark {
				width: 34px;
				height: 34px;
				background: var(--accent);
				position: relative;
				box-shadow: 5px 5px 0 var(--ink);
			}

			.brand-mark::after {
				content: '';
				position: absolute;
				width: 12px;
				height: 12px;
				background: var(--lime);
				right: -6px;
				top: -6px;
				border: 2px solid var(--ink);
			}

			.nav-links {
				display: flex;
				justify-content: center;
				gap: 28px;
				font-size: 14px;
				font-weight: 700;
			}

			.nav-links a {
				position: relative;
			}

			.nav-links a::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -6px;
				width: 0;
				height: 2px;
				background: var(--accent);
				transition: 0.2s ease;
			}

			.nav-links a:hover::after {
				width: 100%;
			}

			.menu-btn {
				display: none;
				border: 0;
				background: transparent;
				color: var(--ink);
				font-size: 28px;
				cursor: pointer;
			}

			/* HERO */
			.hero {
				min-height: calc(100vh - 78px);
				display: flex;
				align-items: center;
				position: relative;
				overflow: hidden;
				border-bottom: 1px solid var(--line);
			}

			.hero::before {
				content: '';
				position: absolute;
				inset: 0;
				pointer-events: none;
				opacity: 0.34;
				background-image: linear-gradient(rgba(11, 18, 32, 0.07) 1px, transparent 1px),
					linear-gradient(90deg, rgba(11, 18, 32, 0.07) 1px, transparent 1px);
				background-size: 56px 56px;
			}

			.hero::after {
				content: '';
				position: absolute;
				width: 520px;
				height: 520px;
				border: 76px solid var(--lime);
				border-radius: 50%;
				right: -220px;
				top: -160px;
				opacity: 0.35;
			}

			.hero-inner {
				position: relative;
				z-index: 2;
				padding: 92px 0;
			}

			.hero-topline {
				display: flex;
				gap: 16px;
				align-items: center;
				margin-bottom: 22px;
				flex-wrap: wrap;
			}

			.badge {
				background: var(--ink);
				color: white;
				padding: 8px 12px;
				font-size: 12px;
				font-weight: 900;
				text-transform: uppercase;
				letter-spacing: 0.14em;
			}

			.hero-copy {
				max-width: 760px;
				font-size: 20px;
				margin-top: 26px;
			}

			.hero-actions {
				margin-top: 34px;
				display: flex;
				gap: 14px;
				flex-wrap: wrap;
			}

			.hero-stage {
				margin-top: 66px;
				display: grid;
				grid-template-columns: 1.2fr 0.8fr;
				gap: 20px;
				align-items: stretch;
			}

			.screen {
				background: var(--ink);
				color: white;
				border: 1px solid var(--ink);
				box-shadow: 14px 14px 0 var(--accent);
				min-height: 420px;
				position: relative;
				overflow: hidden;
			}

			.screen-top {
				height: 46px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.13);
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 16px;
				color: #95a1b4;
				font-size: 12px;
			}

			.screen-dots {
				display: flex;
				gap: 7px;
			}

			.screen-dots span {
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background: #526176;
			}

			.screen-body {
				display: grid;
				grid-template-columns: 150px 1fr;
				min-height: 374px;
			}

			.mini-sidebar {
				border-right: 1px solid rgba(255, 255, 255, 0.1);
				padding: 18px 12px;
			}

			.mini-line {
				height: 9px;
				background: #28344a;
				margin-bottom: 12px;
			}

			.mini-line.active {
				background: var(--lime);
			}
			.mini-content {
				padding: 22px;
			}

			.metrics {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 12px;
				margin-bottom: 14px;
			}

			.metric {
				background: #121d31;
				border: 1px solid #233049;
				padding: 16px;
				min-height: 90px;
			}

			.metric small {
				color: #7f8ba0;
			}
			.metric strong {
				display: block;
				font-size: 28px;
				margin-top: 4px;
				color: white;
			}

			.chart {
				height: 190px;
				border: 1px solid #233049;
				background: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
					linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
				background-size: 38px 38px;
				position: relative;
				overflow: hidden;
			}

			.chart svg {
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
			}

			.side-note {
				background: var(--white);
				border: 1px solid var(--ink);
				padding: 32px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				position: relative;
			}

			.side-note::before {
				content: '01';
				position: absolute;
				top: 18px;
				right: 20px;
				font-size: 70px;
				font-weight: 950;
				color: var(--paper-2);
				line-height: 1;
			}

			.side-note h3 {
				font-size: 30px;
				max-width: 280px;
				position: relative;
				z-index: 1;
			}

			.side-note p {
				margin-top: 18px;
				max-width: 300px;
			}

			.note-tag {
				display: inline-flex;
				align-self: flex-start;
				background: var(--lime);
				color: var(--ink);
				padding: 8px 10px;
				font-size: 12px;
				font-weight: 900;
				border: 1px solid var(--ink);
			}

			/* MARQUEE */
			.marquee {
				background: var(--ink);
				color: white;
				overflow: hidden;
				border-bottom: 1px solid #26324a;
			}

			.marquee-track {
				display: flex;
				gap: 44px;
				padding: 16px 0;
				white-space: nowrap;
				font-weight: 900;
				text-transform: uppercase;
				letter-spacing: 0.12em;
				font-size: 13px;
				animation: slide 22s linear infinite;
				width: max-content;
			}

			.marquee-track span::before {
				content: '✦';
				color: var(--accent);
				margin-right: 44px;
			}

			@keyframes slide {
				from {
					transform: translateX(0);
				}
				to {
					transform: translateX(-50%);
				}
			}

			/* BENEFITS */
			.intro-row {
				display: grid;
				grid-template-columns: 1fr 0.7fr;
				gap: 60px;
				align-items: end;
				margin-bottom: 54px;
			}

			.intro-row p {
				font-size: 18px;
				max-width: 500px;
				justify-self: end;
			}

			.feature-grid {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				gap: 18px;
			}

			.feature {
				background: var(--white);
				border: 1px solid var(--ink);
				padding: 28px;
				min-height: 220px;
				position: relative;
				transition: 0.22s ease;
			}

			.feature:nth-child(1) {
				grid-column: span 5;
			}
			.feature:nth-child(2) {
				grid-column: span 7;
				background: var(--lime);
			}
			.feature:nth-child(3) {
				grid-column: span 4;
			}
			.feature:nth-child(4) {
				grid-column: span 4;
				background: var(--sky);
			}
			.feature:nth-child(5) {
				grid-column: span 4;
			}
			.feature:nth-child(6) {
				grid-column: span 12;
				background: var(--ink);
				color: white;
			}

			.feature:hover {
				transform: translateY(-5px);
				box-shadow: 8px 8px 0 var(--accent);
			}

			.feature-num {
				font-size: 12px;
				font-weight: 900;
				letter-spacing: 0.14em;
				text-transform: uppercase;
				color: var(--accent-dark);
				margin-bottom: 46px;
			}

			.feature h3 {
				font-size: 27px;
			}
			.feature p {
				margin-top: 10px;
				max-width: 500px;
			}
			.feature:nth-child(2) p,
			.feature:nth-child(4) p {
				color: #344153;
			}
			.feature:nth-child(6) h3 {
				color: white;
			}
			.feature:nth-child(6) p {
				color: #a8b2c2;
			}

			/* PROCESS */
			.process {
				background: var(--paper-2);
				border-top: 1px solid var(--line);
				border-bottom: 1px solid var(--line);
			}

			.process-list {
				margin-top: 48px;
				border-top: 1px solid var(--ink);
			}

			.process-item {
				display: grid;
				grid-template-columns: 90px 1fr 1fr;
				gap: 26px;
				padding: 28px 0;
				border-bottom: 1px solid var(--ink);
				align-items: center;
			}

			.process-index {
				font-size: 42px;
				font-weight: 950;
				color: var(--accent);
				letter-spacing: -0.05em;
			}

			.process-item h3 {
				font-size: 28px;
			}

			/* TESTIMONIAL */
			.quote-block {
				display: grid;
				grid-template-columns: 0.7fr 1.3fr;
				gap: 40px;
				align-items: stretch;
			}

			.quote-label {
				border: 1px solid var(--ink);
				background: var(--accent);
				padding: 34px;
				min-height: 300px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				color: white;
			}

			.quote-label strong {
				font-size: 56px;
				line-height: 1;
			}

			.quote-card {
				background: var(--ink);
				color: white;
				padding: 42px;
				position: relative;
				overflow: hidden;
			}

			.quote-card::after {
				content: '“';
				position: absolute;
				font-size: 240px;
				line-height: 1;
				right: 10px;
				bottom: -65px;
				color: #17243a;
				font-family: Georgia, serif;
			}

			.quote-card p {
				color: white;
				font-size: clamp(25px, 3vw, 38px);
				line-height: 1.25;
				max-width: 780px;
				position: relative;
				z-index: 1;
			}

			.quote-meta {
				margin-top: 32px;
				color: #93a0b4;
				position: relative;
				z-index: 1;
			}

			/* CTA */
			.cta-wrap {
				background: var(--lime);
				border: 1px solid var(--ink);
				padding: 54px;
				display: grid;
				grid-template-columns: 1fr auto;
				gap: 30px;
				align-items: center;
				box-shadow: 14px 14px 0 var(--ink);
			}

			.cta-wrap p {
				margin-top: 12px;
				color: #374151;
				max-width: 650px;
			}

			/* CONTACT */
			.contact-grid {
				display: grid;
				grid-template-columns: 0.85fr 1.15fr;
				gap: 56px;
				align-items: start;
			}

			.contact-copy {
				position: sticky;
				top: 110px;
			}

			.contact-points {
				margin-top: 30px;
				display: grid;
				gap: 12px;
			}

			.contact-points div {
				padding: 14px 0;
				border-bottom: 1px solid var(--line);
				display: flex;
				justify-content: space-between;
				gap: 20px;
				font-size: 14px;
			}

			.form {
				background: var(--white);
				border: 1px solid var(--ink);
				padding: 34px;
				box-shadow: 12px 12px 0 var(--accent);
			}

			.form-grid {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 14px;
			}

			.field {
				margin-bottom: 16px;
			}

			.field label {
				display: block;
				color: var(--ink);
				font-size: 13px;
				font-weight: 900;
				text-transform: uppercase;
				letter-spacing: 0.08em;
				margin-bottom: 7px;
			}

			.field input,
			.field textarea {
				width: 100%;
				border: 1px solid #aeb5c0;
				background: var(--paper);
				padding: 14px 14px;
				outline: none;
				border-radius: 0;
			}

			.field input:focus,
			.field textarea:focus {
				border-color: var(--ink);
				box-shadow: inset 4px 0 0 var(--accent);
			}

			.field textarea {
				min-height: 130px;
				resize: vertical;
			}

			/* FOOTER */
			.footer {
				background: var(--ink);
				color: white;
				padding: 38px 0;
			}

			.footer-row {
				display: grid;
				grid-template-columns: auto 1fr auto;
				align-items: center;
				gap: 24px;
			}

			.footer .brand {
				color: white;
			}

			.footer-links {
				display: flex;
				justify-content: center;
				gap: 24px;
				color: #a6b0c0;
				font-size: 14px;
			}

			.footer p {
				color: #7f8ba0;
				font-size: 13px;
			}

			@media (max-width: 900px) {
				.nav {
					grid-template-columns: auto auto;
					justify-content: space-between;
				}

				.nav-links,
				.nav .btn {
					display: none;
				}
				.menu-btn {
					display: block;
				}

				.nav.mobile-open {
					padding: 18px 0;
					grid-template-columns: 1fr auto;
				}

				.nav.mobile-open .nav-links {
					grid-column: 1/-1;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding: 12px 0 4px;
				}

				.hero-stage,
				.intro-row,
				.quote-block,
				.contact-grid,
				.cta-wrap {
					grid-template-columns: 1fr;
				}

				.intro-row p {
					justify-self: start;
				}

				.feature:nth-child(n) {
					grid-column: span 6;
				}

				.process-item {
					grid-template-columns: 60px 1fr;
				}

				.process-item p {
					grid-column: 2;
				}

				.contact-copy {
					position: static;
				}

				.footer-row {
					grid-template-columns: 1fr;
					text-align: center;
				}

				.footer .brand {
					justify-content: center;
				}
				.footer-links {
					flex-wrap: wrap;
				}
			}

			@media (max-width: 640px) {
				.section {
					padding: 72px 0;
				}
				.hero-inner {
					padding: 72px 0;
				}
				.hero-stage {
					margin-top: 46px;
				}
				.feature:nth-child(n) {
					grid-column: 1/-1;
				}
				.screen-body {
					grid-template-columns: 82px 1fr;
				}
				.metrics {
					grid-template-columns: 1fr;
				}
				.screen {
					min-height: auto;
				}
				.chart {
					height: 150px;
				}
				.side-note {
					min-height: 280px;
				}
				.form-grid {
					grid-template-columns: 1fr;
				}
				.cta-wrap,
				.form,
				.quote-card,
				.quote-label {
					padding: 28px;
				}
				.process-item {
					grid-template-columns: 46px 1fr;
				}
				.process-index {
					font-size: 32px;
				}
			}
		</style>
	</head>

	<body>
		<header class="header">
			<div class="container">
				<nav class="nav" id="nav">
					<a class="brand" href="#inicio">
						<span class="brand-mark"></span>
						<span>TuMarca</span>
					</a>

					<div class="nav-links">
						<a href="#beneficios">Qué resuelve</a>
						<a href="#proceso">Cómo funciona</a>
						<a href="#contacto">Contacto</a>
					</div>

					<a class="btn btn-primary" href="#contacto">Solicitar demo ↗</a>
					<button class="menu-btn" id="menuBtn" aria-label="Abrir menú">☰</button>
				</nav>
			</div>
		</header>

		<main>
			<section class="hero" id="inicio">
				<div class="container hero-inner">
					<div class="hero-topline">
						<span class="badge">Software empresarial</span>
						<span class="kicker" style="margin:0">Más control. Menos fricción.</span>
					</div>

					<h1>Tu operación no necesita más pantallas. Necesita más claridad.</h1>

					<p class="hero-copy">
						Una plataforma pensada para equipos que quieren centralizar procesos, reducir tareas
						manuales y convertir la información del día a día en decisiones.
					</p>

					<div class="hero-actions">
						<a class="btn btn-primary" href="#contacto">Ver una demostración ↗</a>
						<a class="btn btn-ghost" href="#beneficios">Explorar la solución</a>
					</div>

					<div class="hero-stage">
						<div class="screen">
							<div class="screen-top">
								<span>panel.operacion / dashboard</span>
								<div class="screen-dots"><span></span><span></span><span></span></div>
							</div>

							<div class="screen-body">
								<aside class="mini-sidebar">
									<div class="mini-line active"></div>
									<div class="mini-line"></div>
									<div class="mini-line"></div>
									<div class="mini-line"></div>
									<div class="mini-line"></div>
								</aside>

								<div class="mini-content">
									<div class="metrics">
										<div class="metric"><small>OPERACIONES</small><strong>1,248</strong></div>
										<div class="metric"><small>EFICIENCIA</small><strong>92%</strong></div>
										<div class="metric"><small>VARIACIÓN</small><strong>+18%</strong></div>
									</div>

									<div class="chart">
										<svg viewBox="0 0 700 220" preserveAspectRatio="none" aria-hidden="true">
											<polyline
												fill="none"
												stroke="#c9ff4a"
												stroke-width="7"
												points="0,175 85,150 145,164 220,117 295,132 370,82 450,102 520,56 605,75 700,30"
											/>
											<circle cx="520" cy="56" r="8" fill="#ff6b2c" />
										</svg>
									</div>
								</div>
							</div>
						</div>

						<aside class="side-note">
							<div>
								<span class="note-tag">EN TIEMPO REAL</span>
								<h3 style="margin-top:22px">Datos visibles donde realmente importan.</h3>
								<p>
									Indicadores, estados y alertas en una interfaz que ayuda a actuar, no solo a mirar
									información.
								</p>
							</div>

							<span style="font-weight:900;color:var(--ink)">OPERACIÓN → CONTROL → DECISIÓN</span>
						</aside>
					</div>
				</div>
			</section>

			<section class="marquee" aria-hidden="true">
				<div class="marquee-track">
					<span>Procesos claros</span>
					<span>Menos trabajo manual</span>
					<span>Información centralizada</span>
					<span>Decisiones más rápidas</span>
					<span>Procesos claros</span>
					<span>Menos trabajo manual</span>
					<span>Información centralizada</span>
					<span>Decisiones más rápidas</span>
				</div>
			</section>

			<section class="section" id="beneficios">
				<div class="container">
					<div class="intro-row">
						<div>
							<span class="kicker">Qué resuelve</span>
							<h2>Diseñado para ordenar lo complejo sin volverlo pesado.</h2>
						</div>
						<p>
							La plataforma concentra los puntos críticos de la operación y los presenta de forma
							directa, visual y accionable.
						</p>
					</div>

					<div class="feature-grid">
						<article class="feature">
							<div class="feature-num">01 / Control</div>
							<h3>Una sola fuente de información.</h3>
							<p>Evita depender de archivos dispersos y versiones diferentes del mismo dato.</p>
						</article>

						<article class="feature">
							<div class="feature-num">02 / Velocidad</div>
							<h3>Menos clics. Menos pasos. Más ejecución.</h3>
							<p>
								Flujos pensados para reducir tareas repetitivas y acelerar el trabajo del equipo.
							</p>
						</article>

						<article class="feature">
							<div class="feature-num">03 / Visibilidad</div>
							<h3>Indicadores que sí sirven.</h3>
							<p>Convierte registros operativos en métricas fáciles de leer y comparar.</p>
						</article>

						<article class="feature">
							<div class="feature-num">04 / Escala</div>
							<h3>Crece sin rehacer todo.</h3>
							<p>Agrega procesos y módulos a medida que cambian tus necesidades.</p>
						</article>

						<article class="feature">
							<div class="feature-num">05 / Integración</div>
							<h3>Conecta lo que ya tienes.</h3>
							<p>Integra APIs y herramientas externas sin romper el flujo principal.</p>
						</article>

						<article class="feature">
							<div class="feature-num" style="color:var(--lime)">06 / Resultado</div>
							<h3>La tecnología deja de ser una carga y empieza a ordenar la operación.</h3>
							<p>
								Una experiencia pensada para usuarios reales, procesos reales y decisiones del día a
								día.
							</p>
						</article>
					</div>
				</div>
			</section>

			<section class="section process" id="proceso">
				<div class="container">
					<span class="kicker">Cómo funciona</span>
					<h2>De la necesidad al uso real, sin complicar el proceso.</h2>

					<div class="process-list">
						<article class="process-item">
							<div class="process-index">01</div>
							<h3>Entendemos tu operación</h3>
							<p>
								Identificamos qué haces hoy, dónde se pierde tiempo y qué información necesitas ver.
							</p>
						</article>

						<article class="process-item">
							<div class="process-index">02</div>
							<h3>Configuramos la solución</h3>
							<p>
								Ajustamos estructura, flujos, roles y datos para que el sistema refleje tu forma de
								trabajar.
							</p>
						</article>

						<article class="process-item">
							<div class="process-index">03</div>
							<h3>Tu equipo empieza a operar</h3>
							<p>
								La plataforma entra en uso con una base clara y preparada para seguir creciendo.
							</p>
						</article>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container quote-block">
					<div class="quote-label">
						<strong>“</strong>
						<div>
							<div
								style="font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:.12em"
							>
								Idea central
							</div>
							<p style="color:white;margin-top:8px">
								La herramienta debe simplificar la operación, no trasladar su complejidad a la
								pantalla.
							</p>
						</div>
					</div>

					<div class="quote-card">
						<p>
							Una buena plataforma no impresiona por cuántas funciones tiene, sino por lo rápido que
							permite entender qué está pasando y qué hacer después.
						</p>
						<div class="quote-meta">Nombre del cliente · Cargo / Empresa</div>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<div class="cta-wrap">
						<div>
							<span class="kicker" style="color:var(--ink)">Siguiente paso</span>
							<h2>Convierte tus procesos en una operación más visible y controlable.</h2>
							<p>
								Esta sección puede adaptarse a tu producto, servicio o propuesta comercial real.
							</p>
						</div>

						<a class="btn btn-primary" href="#contacto">Quiero verlo ↗</a>
					</div>
				</div>
			</section>

			<section class="section" id="contacto">
				<div class="container contact-grid">
					<div class="contact-copy">
						<span class="kicker">Contacto</span>
						<h2>Hablemos de tu operación.</h2>
						<p style="font-size:18px;margin-top:16px">
							Reemplaza estos datos por los de tu empresa y conecta el formulario a tu backend.
						</p>

						<div class="contact-points">
							<div><strong>Correo</strong><span>ventas@tumarca.com</span></div>
							<div><strong>Teléfono</strong><span>+51 999 999 999</span></div>
							<div><strong>Ubicación</strong><span>Lima, Perú</span></div>
						</div>
					</div>

					<form class="form" id="contactForm">
						<div class="form-grid">
							<div class="field">
								<label for="nombre">Nombre</label>
								<input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
							</div>

							<div class="field">
								<label for="empresa">Empresa</label>
								<input id="empresa" name="empresa" type="text" placeholder="Nombre de empresa" />
							</div>
						</div>

						<div class="field">
							<label for="correo">Correo</label>
							<input
								id="correo"
								name="correo"
								type="email"
								placeholder="correo@empresa.com"
								required
							/>
						</div>

						<div class="field">
							<label for="mensaje">¿Qué necesitas resolver?</label>
							<textarea id="mensaje" name="mensaje" placeholder="Cuéntanos brevemente..."
							></textarea>
						</div>

						<button class="btn btn-primary" type="submit">Enviar solicitud ↗</button>
						<p id="formMessage" style="margin-top:14px;font-size:14px"></p>
					</form>
				</div>
			</section>
		</main>

		<footer class="footer">
			<div class="container footer-row">
				<a class="brand" href="#inicio">
					<span class="brand-mark"></span>
					<span>TuMarca</span>
				</a>

				<div class="footer-links">
					<a href="#beneficios">Qué resuelve</a>
					<a href="#proceso">Cómo funciona</a>
					<a href="#contacto">Contacto</a>
				</div>

				<p>© <span id="year"></span> TuMarca</p>
			</div>
		</footer>

		<script>
			const menuBtn = document.getElementById('menuBtn');
			const nav = document.getElementById('nav');

			menuBtn.addEventListener('click', () => {
				nav.classList.toggle('mobile-open');
			});

			document.querySelectorAll('.nav-links a').forEach((link) => {
				link.addEventListener('click', () => nav.classList.remove('mobile-open'));
			});

			document.getElementById('year').textContent = new Date().getFullYear();

			document.getElementById('contactForm').addEventListener('submit', (event) => {
				event.preventDefault();
				const message = document.getElementById('formMessage');
				message.textContent = 'Formulario de demostración: conecta aquí tu endpoint real.';
				message.style.color = '#df4f16';
			});
		</script>
	</body>
</html>

<script>
	import Navbar from "../components/Navbar.svelte"
	import LinkButton from "../components/LinkButton.svelte"
	import { slide } from "svelte/transition";
</script>

<main>
	<Navbar />
	<div class="main" style="background: linear-gradient(rgba(3, 3, 3, 0.705), rgba(22, 22, 22, 0.808)), url('https://www.sketchappsources.com/resources/source-image/tv-glitch-sureshmurali29.png');">
		<h1 in:slide><glitch>echo</glitch> Welcome 👋</h1>
		<p in:slide>I am a highschool student who<br>is interested in computers<br>and this is my website!</p>
		<div in:slide class="links">
			<LinkButton link="https://discord.com/users/568131907368386565"><i class='bx bxl-discord-alt'></i></LinkButton>
			<LinkButton link="https://github.com/ngn13"><i class='bx bxl-github' ></i></LinkButton>
		</div>
	</div>	
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	.main {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		border-radius: $border-rad;
		width: auto;
		position:absolute;
  		top: 150px;
  		right: 30px;
  		bottom: 40px;
  		left: 30px;
		padding: 100px;
		background-size: 1000px;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: left;

		h1{
			font-size: 70px;
			margin-bottom: 9px;
			text-shadow: 3px 4px 7px rgba(81,67,21,0.8);

		}

		p{
			font-size: 30px;
			margin: 0 0 20px 0; 
			text-align: center;
		}

	}

	.links{
		display: flex;
		gap: 20px;
	}

	glitch{
		animation-name: colorAnimation;
		animation-iteration-count: infinite;
		animation-duration: 10s;
		text-shadow: none;
	}
</style>
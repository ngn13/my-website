<script>
	import Navbar from "../components/Navbar.svelte"
	import ImageLink from "../components/ImageLink.svelte"
	import { slide } from "svelte/transition";
</script>

<main>
	<Navbar />
	<div class="info">
		<div class="infotext" in:slide>
			<h1><glitch>Donate</glitch></h1>
			<p>If you wanna support me<br>(for some reason) use the<br>links on the right.</p>
		</div>
		<div class="methods">
			<div>
				<ImageLink link="https://www.buymeacoffee.com/ngn13" content="Buy me a coffee"><i class='bx bx-coffee-togo' ></i></ImageLink>
			</div>
			<div>
				<ImageLink link="https://etherscan.io/address/0x7a5D553C35Cec92D84e1992b29e40d9087AD8f0f" content="Ethereum wallet"><i class='bx bxs-wallet-alt'></i></ImageLink>
			</div>
		</div>
		
	</div>
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	.info{
		background: linear-gradient(rgba(3, 3, 3, 0.705), rgba(22, 22, 22, 0.808)), url('https://www.sketchappsources.com/resources/source-image/tv-glitch-sureshmurali29.png');
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		border-radius: $border-rad;
		width: auto;
		position:absolute;
  		top: 150px;
  		right: 30px;
  		bottom: 40px;
  		left: 30px;
		padding: 100px;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: left;
		gap: 90px;
	}

	.methods{
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.infotext{
		color: white;
		padding: 0;
		margin: 0;

		h1{
			text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
			font-size: 100px;
			margin: 0;
			padding: 0;
		}

		p{
			font-size: 30px;
			margin: 0;
			padding: 0;
			margin-left: 10px;
		}
	}

</style>
<script>
	import { onMount } from 'svelte';

	let pass = null
	let user = null

	function login(){
		
		if(user==null || pass==null){
			return
		}

		async function req(){
        	const response = await fetch(
        	    "/api/login/",
        	    {
					method: 'POST',
					headers: {
					  'Accept': 'application/json',
					  'Content-Type': 'application/json'
					},
					body: JSON.stringify({username: user, password: pass})
        	    }
        	);
        	const data = await response.json()
        	if (data["error"]===true){
        		alert("Invalid credentials")
        		return
        	}else if (data["error"] instanceof String){
        		alert(data["error"])
        	}
        	location.replace("/#/panel")
    	}

    	req()
	}
</script>

<main>
	<div>
		<h1>Admin</h1>
		<input type="text" placeholder="Username" bind:value={user}>
		<input type="password" placeholder="Password" bind:value={pass}>
		<button on:click={()=>login()}>Login</button>
	</div>	
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	div{
		background: $dark-two;
		display: flex;
		flex-direction: column;
		position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        padding: 50px; 
        animation-name: gayShadowAnimation;
		animation-iteration-count: infinite;
		animation-duration: 10s;

        input{
        	background: $dark-three;
        	border-radius: 5px;
        	padding: 10px;
        	color: white;
        	border: none;
        	margin-bottom: 20px;
        	outline: none;
        }

        button{
        	background: $dark-three;
        	padding: 10px;
        	color: white;
        	border-radius: 5px;
        	border: none;
        	font-size: 15px;
        	cursor: pointer;
        }

        button:hover{
        	animation-name: colorAnimation;
			animation-iteration-count: infinite;
			animation-duration: 10s;	
        }
	}

</style>
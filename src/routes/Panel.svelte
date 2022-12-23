<script>
	let name, desc, github, web, background, rname
	
	function addproject(){
		async function req(){
        	const response = await fetch(
        	    "/api/newproject/",
        	    {
					method: "POST",
					headers: {
					  "Accept": "application/json",
					  "Content-Type": "application/json"
					},
					body: JSON.stringify(
						{name: name, desc: desc, github: github, web: web, background: background}
					)
        	    }
        	)
        	const data = await response.json()
        	console.log(data)
        	if (data["error"]===true){
        		location.href = "/"
        		return
        	}else if(typeof(data["error"]) == "string"){
        		alert(data["error"])
        		return
        	}

        
    	}

    	req()
	}	

	function removeproject() {
		async function req(){
        	const response = await fetch(
        	    "/api/delproject/",
        	    {
					method: "POST",
					headers: {
					  "Accept": "application/json",
					  "Content-Type": "application/json"
					},
					body: JSON.stringify(
						{name: rname}
					)
        	    }
        	)
        	const data = await response.json()
        	if (data["error"]===true){
        		location.href = "/"
        		return
        	}else if(typeof(data["error"]) == "string"){
        		alert(data["error"])
        		return
        	}

        	
    	}

    	req()
	}

	function logout(){
		document.cookie = ""
		location.href = "/"
	}
</script>

<main>
	<div class="menubar">
		<h1>Admin Panel</h1>
		<button on:click={()=>logout()}>Logout</button>
	</div>
	
	<div class="inputs">
		<p>Add project</p>
		<input bind:value={name} type="text" placeholder="Project name">
		<input bind:value={desc} type="text" placeholder="Project desc">
		<input bind:value={github} type="text" placeholder="Github URL">
		<input bind:value={web} type="text" placeholder="Web URL">
		<input bind:value={background} type="text" placeholder="Background URL">
		<button on:click={()=>addproject()}>Publish</button>
	</div>

	<div class="inputs">
		<p>Remove project</p>
		<input bind:value={rname} type="text" placeholder="Project name">
		<button on:click={()=>removeproject()}>Remove</button>
	</div>
</main>

<style type="text/scss">
	@import "../styles/vars.scss";

	.menubar{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 0 20px;

		h1{
			color: white;
			font-weight: 900;
		}	

		button{
			border: none;
			background: $dark-three;
			height: 50px;
			width: 100px;
			color: white;
			font-size: 20px;
			border-radius: 5px;
			cursor: pointer;
		}

		button:hover{
			animation-name: gayShadowAnimation;
			animation-iteration-count: infinite;
			animation-duration: 10s;
		}
	}
	
	.inputs{
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 10px 0px 40px 0px;
		padding: 50px;
		background: $dark-two;
		border-radius: $border-rad;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

		p{
			color: white;
			font-size: 30px;
			margin: 0;
			margin-left: 5px;
		}
	

		input {
			background: $dark-three;
			border: none;
			outline: none;
			padding: 20px;
			border-radius: 5px;
			color: white;
			font-size: 20px;
		}

		button{
			background: $dark-three;
			color: white;
			font-size: 20px;
			cursor: pointer;
			border: none;
			padding: 20px;
		}

		button:hover{
			animation-name: colorAnimation;
			animation-iteration-count: infinite;
			animation-duration: 10s;
		}
	}

	
</style>
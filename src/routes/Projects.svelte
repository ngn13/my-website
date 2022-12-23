<script>
	import Navbar from "../components/Navbar.svelte"
	import Project from "../components/Project.svelte"
	import { slide } from "svelte/transition";
	import { onMount } from 'svelte';

	let projects = []
    onMount(async () => {
        const response = await fetch(
            "/api/projects/",
            {
            	method: "GET",
            }
        );
        const data = await response.json()
        projects = data.projects;
    })
</script>

<main>
	<Navbar />
	<div class="projects_header">
		<h1>Projects</h1>
		<p>Here are the projects that I've been working on</p>
	</div>
	<div class="projects">
		{#each projects as project}
			<Project name={project.name} desc={project.desc} github={project.github} web={project.web} background={project.background}/>
		{/each}
	</div>
</main>

<style type="text/scss">
	.projects_header{
		margin-top: 50px;

		h1{
			color: white;
			font-size: 70px;
			text-align: center;
			margin: 0;
			padding: 0;
		}

		p{
			color: white;
			font-size: 30px;
			text-align: center;
			margin-top: 10px;
			padding: 0;
		}
	}

	.projects{
		margin-top: 50px;
		margin-bottom: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}
</style>
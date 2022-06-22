<script lang="ts">
	import { terminal, textinput, command } from "./os"
	let textbox
</script>

<main on:click={() => {textbox.focus()}}>
<pre>
	
{@html $terminal}
<form on:submit|preventDefault={command}>
<input bind:this={textbox} type="text" bind:value={$textinput} autofocus />
</form>
	
</pre>
</main>

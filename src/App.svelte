<script lang="ts">
	import { terminal, textinput, commandTyped } from "./os"
	let textbox
</script>

<main on:click={() => textbox.focus()}>
<pre>
	
{@html $terminal}
<form on:submit|preventDefault={commandTyped}>
<input bind:this={textbox} type="text" bind:value={$textinput} autofocus />
</form>
	
</pre>
</main>

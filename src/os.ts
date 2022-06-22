import { writable, get } from "svelte/store"

export let terminal = writable("")
export let textinput = writable("")

function print(text) {
	terminal.update(n => n += text)
}

function clear() {
	terminal.set("")
}

export function command() {
	let command = get(textinput)
	textinput.set("")
	print(`<p class="w">${command}</p>`)
	switch (command) {
		case "@clear":
			clear()
			break
		case "@help":
			break
	}
}

print(` 
	<br />
	<br />
    <p class="r">          ╔═██  ╔═██          ╔═██                ╔═██      ╔═██      ╔═██ ╔═██████</p>
    <p class="r">          ║ ██  ║ ██          ║ ██                ╚══╝      ║ ██      ║ ██╔╝██══╗ ██</p>
    <p class="o">          ║ ██  ║ ██╔═██  ╔═██║ ███████  ╔═██████ ╔═██ ╔═███████      ║ ██║ ██  ╚══╝</p>
    <p class="o">          ║ ████████║ ██  ║ ██║ ██══╗ ██╔╝██══╗ ██║ ██╔╝██══╗ ██      ║ ██╚╗ ██████</p>
    <p class="g">          ║ ██══╗ ██║ ██  ║ ██║ ██  ║ ██║ ██  ╚══╝║ ██║ ██  ║ ██      ║ ██ ╚════╗ ██</p>
    <p class="g">          ║ ██  ║ ██║ ██  ║ ██║ ██  ║ ██║ ██      ║ ██║ ██  ║ ██╔═██  ║ ██╔═██  ║ ██</p>
 	<p class="t">          ║ ██  ║ ██╚╗ ███████║ ███████╝║ ██      ║ ██╚╗ ███████╚╗ ██████╝╚╗ ██████╝</p>
    <p class="b">          ╚══╝  ╚══╝ ╚════╗ ██╚═══════╝ ╚══╝      ╚══╝ ╚═══════╝ ╚══════╝  ╚══════╝</p>
	<p class="b">                    ╔═██  ║ ██                                                     </p>
    <p class="p">                    ╚╗ ██████╝                                                     </p>
    <p class="p">                     ╚══════╝                                                      </p>

	<p class="r">        ╔═══════════════════════════════════════════╗ </p>
    <p class="r">       ╔╝                                           ╚╗</p>
    <p class="o">       ║        <░▒▓ HybridJS  I N D E V ▓▒░>        ║</p>
    <p class="o">       ║                                             ║</p>
    <p class="g">       ║            <░▒▓ 2022 v0.0.0 ▓▒░>            ║</p>
    <p class="g">       ║                                             ║</p>
    <p class="t">       ║     <░▒▓ By Taskmanager & Heliodex ▓▒░>     ║</p>
    <p class="t">       ║                                             ║</p>
    <p class="b">       ║       A recreation of HybridOS 2.14.4.      ║</p>
    <p class="b">       ║          Dedicated to Brent Gibson.         ║</p>
    <p class="p">       ╚╗                                           ╔╝</p>
    <p class="p">        ╚═══════════════════════════════════════════╝ </p>


	<p class="g">   <░▒▓  Original HybridJS by Taskmanager & Heliodex. ▓▒░></p>
<br />
<br />
<p class="o">Username and Password are both Guest if you wish to use HybridJS as a guest.</p>

<p class="b">Do you need a new HybridJS account?</p>
<p class="b">═══════════════════════════════════</p>
`)


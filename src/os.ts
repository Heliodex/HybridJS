import { writable, get } from "svelte/store"

export let terminal = writable("")
export let textinput = writable("")
let command: string

function print(text, colour: string) {
	terminal.update(n => n += `<p class="${colour}">${text}</p>`)
}

function clear() {
	terminal.set("")
}

export function commandTyped() {
	command = get(textinput)
	textinput.set("")
	print(`<br /><br /><br /><br />${command}`, "w")
	print("<br />", "w")

	switch (command) {
		case "@clear":
			clear()
			break
		case "@commands":
			print("test", "w")
			break
		
		default:
			print("Command not recognized/implemented.", "r")
          	print("Please check your spelling and/or case.", "o")
          	print("Also make sure it begins with an @ sign.", "g")
	}	

	print("<br /><br />", "w")
	print("Homescreen - Please type a command.", "t")
	print("═══════════════════════════════════", "t")
}


print("<br /><br />", "w")
print("           ╔═██  ╔═██          ╔═██                ╔═██      ╔═██      ╔═██ ╔═██████ </p>", "r")
print("           ║ ██  ║ ██          ║ ██                ╚══╝      ║ ██      ║ ██╔╝██══╗ ██</p>", "r")
print("           ║ ██  ║ ██╔═██  ╔═██║ ███████  ╔═██████ ╔═██ ╔═███████      ║ ██║ ██  ╚══╝</p>", "o")
print("           ║ ████████║ ██  ║ ██║ ██══╗ ██╔╝██══╗ ██║ ██╔╝██══╗ ██      ║ ██╚╗ ██████ </p>", "o")
print("           ║ ██══╗ ██║ ██  ║ ██║ ██  ║ ██║ ██  ╚══╝║ ██║ ██  ║ ██      ║ ██ ╚════╗ ██</p>", "g")
print("           ║ ██  ║ ██║ ██  ║ ██║ ██  ║ ██║ ██      ║ ██║ ██  ║ ██╔═██  ║ ██╔═██  ║ ██</p>", "g")
print("           ║ ██  ║ ██╚╗ ███████║ ███████╝║ ██      ║ ██╚╗ ███████╚╗ ██████╝╚╗ ██████╝</p>", "t")
print("           ╚══╝  ╚══╝ ╚════╗ ██╚═══════╝ ╚══╝      ╚══╝ ╚═══════╝ ╚══════╝  ╚══════╝ </p>", "b")
print("                     ╔═██  ║ ██                                                      </p>", "b")
print("                     ╚╗ ██████╝                                                      </p>", "p")
print("                      ╚══════╝                                                       </p>", "p")

print("         ╔═══════════════════════════════════════════╗ </p>", "r")
print("        ╔╝                                           ╚╗</p>", "r")
print("        ║        <░▒▓ HybridJS  I N D E V ▓▒░>        ║</p>", "o")
print("        ║                                             ║</p>", "o")
print("        ║            <░▒▓ 2022 v0.0.0 ▓▒░>            ║</p>", "g")
print("        ║                                             ║</p>", "g")
print("        ║     <░▒▓ By Taskmanager & Heliodex ▓▒░>     ║</p>", "t")
print("        ║                                             ║</p>", "t")
print("        ║       A recreation of HybridOS 2.14.4.      ║</p>", "b")
print("        ║          Dedicated to Brent Gibson.         ║</p>", "b")
print("        ╚╗                                           ╔╝</p>", "p")
print("         ╚═══════════════════════════════════════════╝ </p>", "p")

print("<br />", "w")
print("    <░▒▓  Original HybridOS by Taskmanager & Heliodex. ▓▒░></p>", "g")
print("<br />", "w")
print("<br />", "w")
print("Username and Password are both Guest if you wish to use HybridJS as a guest.</p>", "o")

print("Do you need a new HybridJS account?</p>", "b")
print("═══════════════════════════════════</p>", "b")
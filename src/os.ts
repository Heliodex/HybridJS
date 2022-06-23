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
			print("- @clear     ║ Clears the console.", "g")
			print("- @info      ║ Shows information about the OS and your Device.", "p")
			print("- @credits   ║ Shows all amazing people who helped with HybridOS.", "g")
			print("- @time      ║ Tells you the time.", "p")
			print("- @cal       ║ Shows you a calendar of the month.", "g")
			print("- @gameroom  ║ Opens the GameRoom app.", "p")
			print("- @timeapp   ║ Opens the HybridTime app.", "g")
			print("- @logout    ║ Logs out of your account.", "p")
			print("- @readme    ║ Opens the HybridOS README file.", "g")
			print("- @license   ║ Opens the HybridOS License file.", "p")
			print("- @changelog ║ Opens the HybridOS Changelog file.", "g")
			print("- @internet  ║ Shows you the data of any webpage.", "p")
			print("- @shutdown  ║ Shuts down HybridOS.", "g")
			break
		
		case "@shutdown":
			print("Shutting down...", "r")
			print("Shutting down..", "r")
			print("Shutting down.", "r")
			print("todo", "w")
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
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

		case "@clear":
			clear()
			break
		
		case "@info":
			print("HybridJS", "g")
			print("Version 0.0.0", "b")
			print("A recreation of HybridOS v2.14.4", "g")
			break
			
		case "@credits":
			print("- Heliodex     ║ Co-Founder of HybridOS.", "t")
			print("- Taskmanager  ║ Co-Founder of HybridOS.", "o")
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
	print("Homescreen - Run @commands for a list of all commands.", "t")
	print("═══════════════════════════════════", "t")
}


print("<br /><br />", "w")
print("╔═██  ╔═██          ╔═██                ╔═██      ╔═██      ╔═██ ╔═██████ ", "r")
print("║ ██  ║ ██          ║ ██                ╚══╝      ║ ██      ║ ██╔╝██══╗ ██", "r")
print("║ ██  ║ ██╔═██  ╔═██║ ███████  ╔═██████ ╔═██ ╔═███████      ║ ██║ ██  ╚══╝", "o")
print("║ ████████║ ██  ║ ██║ ██══╗ ██╔╝██══╗ ██║ ██╔╝██══╗ ██      ║ ██╚╗ ██████ ", "o")
print("║ ██══╗ ██║ ██  ║ ██║ ██  ║ ██║ ██  ╚══╝║ ██║ ██  ║ ██      ║ ██ ╚════╗ ██", "g")
print("║ ██  ║ ██║ ██  ║ ██║ ██  ║ ██║ ██      ║ ██║ ██  ║ ██╔═██  ║ ██╔═██  ║ ██", "g")
print("║ ██  ║ ██╚╗ ███████║ ███████╝║ ██      ║ ██╚╗ ███████╚╗ ██████╝╚╗ ██████╝", "t")
print("╚══╝  ╚══╝ ╚════╗ ██╚═══════╝ ╚══╝      ╚══╝ ╚═══════╝ ╚══════╝  ╚══════╝ ", "b")
print("          ╔═██  ║ ██                                                      ", "b")
print("          ╚╗ ██████╝                                                      ", "p")
print("           ╚══════╝                                                       ", "p")

print(" ╔═══════════════════════════════════════════╗ ", "r")
print("╔╝                                           ╚╗", "r")
print("║        <░▒▓ HybridJS  I N D E V ▓▒░>        ║", "o")
print("║                                             ║", "o")
print("║            <░▒▓ 2022 v0.0.0 ▓▒░>            ║", "g")
print("║                                             ║", "g")
print("║     <░▒▓ By Taskmanager & Heliodex ▓▒░>     ║", "t")
print("║                                             ║", "t")
print("║       A recreation of HybridOS 2.14.4.      ║", "b")
print("╚╗                                           ╔╝", "p")
print(" ╚═══════════════════════════════════════════╝ ", "p")

print("<br />", "w")
print("<░▒▓  Original HybridOS by Taskmanager & Heliodex. Ported to JavaScript. ▓▒░>", "g")
print("<br />", "w")
print("<br />", "w")
print("Username and Password are both Guest if you wish to use HybridJS as a guest.", "o")

print("Do you need a new HybridJS account? (Y/N)", "b")
print("═════════════════════════════════════════", "b")

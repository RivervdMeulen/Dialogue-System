# Dialogue-System
Simple JS dialogue system, able to read out a special conversation file and print it to the screen in the right order.

# Conversation file
This code uses simple conversation files that are easy to edit to make the conversations. It puts possible answers plus the branch in the conversation you have to go to in an array, then it bundles that in an array with the NPC text it's an answer for. All of those questions and coversation branches are put together in a larger conversation array.

# Reading the conversation
The other script reads the conversation and prints it to the screen. It puts the NPC text into a div on the page, and the answers into buttons underneath. When you choose an answer, it checks which branch it should switch to and then puts the data from that branch on the page instead. The conversation arrays have been placed in an array in this example, but it also works with the conversations just in variables or even if you keep them in the seperate files and call those, though you have to first load in the conversation and then the translating file, otherwise you'll get an error because it can't find the conversation yet.

# Example
You can try out the system with 2 example conversations on this link. Note that the conversation can be switched easily.
http://riverthomas.com/projects/DialogueSystem/game/

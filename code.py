print("##### Index of Coincidence Calculator #####")
print("This application can calculate IoCs for input upto a sentence")
print("Use exit() to exit")
canExit = False
while canExit == False:
	userInput = input("Enter input word/sentence>>>")
	if userInput == "exit()":
		canExit = True
		print("exiting...")
	else:
		sentenceLength = len(userInput)
		record = {}
		for letter in userInput:
			if letter != "":
				curValue = record.get(letter)
				if curValue:
					record[letter] = curValue + 1
				else:
					record[letter] = 1
		ioc = 1.0
		recordLength = len(record)
		if recordLength > 1:
			numerator = 0		
			for letter, repeats in record.items():
				if repeats > 1:
					numerator += repeats * (repeats - 1)
			denominator = sentenceLength * (sentenceLength -1)
			ioc = numerator / denominator
		print("IOC: ", ioc)

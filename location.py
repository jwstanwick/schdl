import sys
import xlrd

def each_chunk(stream, separator): #This functtion prevents stack overflows
  buffer = ''
  while True: 
    chunk = stream.read(4096) #I have no idea what the fuck the 4096 means
    if not chunk:
      yield buffer
      break
    buffer += chunk
    while True:
      try:
        part, buffer = buffer.split(separator, 1)
      except ValueError:
        break
      else:
        yield part

# use this code in case of stack overflow!!!

# with open('commonLocations.txt') as myFile:
#  for chunk in each_chunk(myFile, separator='\n'):
#    print(chunk)

loc = ("locations.")
 
# To open Workbook
wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)
 
# For row 0 and column 0
print(sheet.cell_value(0, 0))
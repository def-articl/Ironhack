puts "What is the source file?"
source_filename = gets.chomp

puts "What is the destination filename?"
destination_filename = gets.chomp

source_file_contents = IO.read(source_filename)
IO.write(destination_filename, source_file_contents)

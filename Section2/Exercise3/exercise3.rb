# Fizzbuzz exercise
#
# Iteration 1

range = 1...100
numbers = range.to_a

puts "\nIteration 1"

for num in numbers 

    if (num % 3 == 0)
        puts "Fizz"
    elsif (num % 5 == 0)
        puts "Buzz"
    else
        puts num
    end

end


puts "\nIteration 2"

numbers.each do |num|

    if (num % 3 == 0)
        puts "Fizz"
    elsif (num % 5 == 0)
        puts "Buzz"
    else
        puts num
    end

end


puts "\nIteration 3"

i = 0
while i < numbers.length

    if (numbers[i] % 3 == 0)
        puts "Fizz"
    elsif (numbers[i] % 5 == 0)
        puts "Buzz"
    else
        puts numbers[i] 
    end

    i += 1

end

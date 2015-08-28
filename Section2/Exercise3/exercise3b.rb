#Add a new condition: if the number starts with the number 1, add “Bang” to the result. 

range = 1...100
numbers = range.to_a

for num in numbers 

    result = ""

    if (num % 3 == 0)
        result += "Fizz"
    elsif (num % 5 == 0)
        result += "Buzz"
    else
        result += num.to_s
    end

    if (num.to_s[0].to_i == 1)
        result += "Bang"

    end

    puts result

end


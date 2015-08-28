require 'pry'
# First iteration

def alphabet

    range = "a" .. "z"
    alphabet = []
    ascii_alphabet = []

    for i in range
        alphabet << i
    end

    for letter in alphabet
        ascii_alphabet << letter.ord 
    end

    return alphabet, ascii_alphabet
end

def setup_alphabet(shift)

    alphabet = alphabet()[0] 
    ascii_alphabet = alphabet()[1]

    repetitions = shift.abs

    if shift == shift.abs
        repetitions.times {
            moved = ascii_alphabet.shift
            ascii_alphabet.push(moved)
        }
    else
        repetitions.times {
            moved = ascii_alphabet.pop
            ascii_alphabet.insert(0, moved)
        }

    end

    alphabet.clear
    for num in ascii_alphabet
        alphabet << num.chr
    end
        
    return alphabet, ascii_alphabet

end

def decypher(cypher, shift)
    alphabet = setup_alphabet(shift)[0]
    ascii_alphabet = setup_alphabet(shift)[1]

    regular_alphabet = alphabet()[0]

    cy_array = cypher.split('')
    solved = []
    solved_string = ""

    for letter in cy_array
        if ascii_alphabet.include?(letter.ord)
            alph_index = ascii_alphabet.index(letter.ord)
            decoded = regular_alphabet[alph_index]
            solved << decoded 
        end
    end

    for letter in solved
        solved_string.concat(letter)
    end

    solved_string
end

def encypher(string, shift)
    alphabet = setup_alphabet(shift)[0]
    ascii_alphabet = setup_alphabet(shift)[1]

    regular_alphabet = alphabet()[0]

    en_array = string.split('')
    encyphered = []
    encyphered_string = ""

    for letter in en_array
        if ascii_alphabet.include?(letter.ord)
            en_index = ascii_alphabet.index(letter.ord)
            encoded = regular_alphabet[en_index]
            encyphered << encoded
        end
    end

    for letter in encyphered
        encyphered_string.concat(letter)
    end

    encyphered_string
end


string = "ahoy"
puts "Encyphering #{string}: "
puts encypher(string, -5)

cypher = "fmtd"
puts "Decyphering #{cypher}: "
puts decypher(cypher, 5)


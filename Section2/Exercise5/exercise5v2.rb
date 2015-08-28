require 'pry'
# Second iteration 

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

def break_up_sentences(string)

    result_array = []

    sentence = string.split(' ')
    for word in sentence
        a_word = word.split('')
        for letter in a_word
            result_array << letter
        end
        result_array << ' '
    end

    result_array
end

def decypher(cypher, shift)
    alphabet = setup_alphabet(shift)[0]
    ascii_alphabet = setup_alphabet(shift)[1]

    regular_alphabet = alphabet()[0]

    cy_array = break_up_sentences(cypher)
    
    solved = []
    solved_string = ""

    for letter in cy_array
        if ascii_alphabet.include?(letter.ord)
            alph_index = ascii_alphabet.index(letter.ord)
            decoded = regular_alphabet[alph_index]
            solved << decoded 
        elsif letter == ' '
            solved << letter
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

    en_array = break_up_sentences(string)
    encyphered = []
    encyphered_string = ""

    for letter in en_array
        if ascii_alphabet.include?(letter.ord)
            en_index = ascii_alphabet.index(letter.ord)
            encoded = regular_alphabet[en_index]
            encyphered << encoded
        elsif letter == ' '
            encyphered << letter
        end
    end

    for letter in encyphered
        encyphered_string.concat(letter)
    end

    encyphered_string
end


string = "my real name is donald duck"
puts "Encyphering \"#{string}\": "
puts encypher(string, -3)

cypher = "pb uhdo qdph lv grqdog gxfn"
puts "Decyphering \"#{cypher}\": "
puts decypher(cypher, 3)


require 'pry'

#Write a function that receives a sentence and returns an array with the 
#sentence's words sorted alphabetically. Ignore case and punctuation.

PERIOD = '.'
COMMA = ','
sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor."

def remove_punctuation(sentence)

    input_array = sentence.split(' ')
    original_array = []

    for original in input_array
        if original.include?(PERIOD)
            original = original.delete(PERIOD)
        elsif original.include?(COMMA)
            original = original.delete(COMMA)
        end

        original_array << original
    end
            
    modified_array = original_array.dup 
    return original_array, modified_array
end

def sort_ignore_case(original_array, modified_array)

    definitive_array = []
    for item in modified_array
        modified_array[modified_array.index(item)] = item.downcase
    end

    modified_array = modified_array.sort

    for original in original_array
        for item in modified_array
            if original.downcase == item
                definitive_array[modified_array.index(item)] = original
            end
        end
    end

    definitive_array
end

original_array = remove_punctuation(sentence)[0]
modified_array= remove_punctuation(sentence)[1]
puts sort_ignore_case(original_array, modified_array)

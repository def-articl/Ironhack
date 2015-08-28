require 'pry'

#Write a function that receives a sentence and returns an array with the 
#sentence's words sorted alphabetically. Ignore case and punctuation.

sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor."
CAP_MARK = "$$$"
PERIOD = '.'
COMMA = ','

def sort_words(sentence)
    sentence_array = sentence.split(" ")
    # cleaned array = the one we'll be working with
    cleaned_array = []
    
    # get rid of commas and periods
    for word in sentence_array
        if (word.include?(PERIOD))
            word = word.delete(PERIOD)
        end

        if (word.include?(COMMA))
            word = word.delete(COMMA)
        end

        cleaned_array << word
    end

    # call the other method for sorting
    compare_words(cleaned_array)
end

def compare_words(cleaned_array)

    # keeps indexes of capitalized words 
    # in cleaned_array
    indexes = []
    for word in cleaned_array
        # check for capitalized words
        if (word[0] == word[0].capitalize)
            index = cleaned_array.index(word)
            # put index to indexes array
            indexes << index
            # make all words lowercase for sorting purposes
            cleaned_array[index] = cleaned_array[index].downcase
        end
    end

    # crazy hack - here I match indexes to words that were 
    # previously capitalized and mark them with weird string 
    for index in indexes
        cleaned_array[index] += CAP_MARK
    end

    # finally sort everything
    cleaned_array = cleaned_array.sort

    # turn the marked words back to their original capitalized
    # form
    for word in cleaned_array
        if (word.include?(CAP_MARK))
            index = cleaned_array.index(word)
            word = word.capitalize
            word = word.delete(CAP_MARK)
            cleaned_array[index] = word
        end
    end

    cleaned_array
end

puts sort_words(sentence)

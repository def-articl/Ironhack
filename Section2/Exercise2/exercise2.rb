#Code a program to solve the following problem: We need a software for the next 
#hackshow to manage the apps that the students will make during the iOS bootcamp 
#The data we are interested in is: name of the app, author, OS of the apps
#and the score obtained.

def returnDataToString(app_name, app_author, app_system, app_score)
    puts "#{app_author} has developed #{app_name} for #{app_system} and he has got #{app_score} points."
end


def calculateScore(app_score)
    score = {
        "poor" => [0, 1, 2, 3, 4],
        "good" => [7, 8, 9],
        "very cool" => [10]
    }

    if app_score == {for int in score.keys}
    

puts "App name? "
app_name = gets.chomp

puts "App author? "
app_author = gets.chomp

puts "App system? "
app_system = gets.chomp

puts "Score? "
app_score = gets.chomp.to_i

returnDataToString(app_name, app_author, app_system, app_score)

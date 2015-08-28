require 'pry'
require 'date'

def fabricate_saturday
    # set up fictional saturday
    weekend = DateTime.new(2015, 8, 22, 12, 00, 00)
end

class Item
    attr_reader :price
    def initialize
        @price = price
    end
end

class Oranges < Item
    def initialize(price)
        @price = price
    end
end

class Bananas < Item
    def initialize(price)
        @price = price
    end
end

class Apples < Item
    def initialize(price)
        @price = price
    end
end

class Watermelon < Item
    def initialize(price)
        @price = price
        if fabricate_saturday.wday == 6 || fabricate_saturday.wday == 7
            puts "Yes it's weekend. Watermelons are 10% off!"
            @price *= 0.9
        end
    end
end

orange = Oranges.new(2)
banana = Bananas.new(3)
apple = Apples.new(5)
watermelon = Watermelon.new(1)

class ShoppingCart
    def initialize
        @total_items = []
    end

    def add_items(item)
        @total_items.push(item)
    end

    def calculate_total
        total = 0
        for item in @total_items
            total += item.price
        end

        total = discount(total)


        puts "Your total is #{total} dollars."
    end

    def discount(total)

        apple_count = 0
        for item in @total_items
            if item.class == Apples
                apple_count += 1
            end
        end

        if @total_items.length > 5
            total *= 0.95
            puts "You have more than five items, you get 5% off."
        end

        if apple_count >= 2
            # for every two apples, you pay only for one
            quotient = apple_count.divmod(2)[0]
            total = total - (quotient * 5) 
            puts "You have #{apple_count} apples, you pay for #{quotient}."
        end

        if total > 100
            total -= 10
            puts "You get $10 off because your total is more than $100."
        end

        total
    end
end

my_cart = ShoppingCart.new
my_cart.add_items(orange)
my_cart.add_items(banana)
9.times {my_cart.add_items(apple)}
my_cart.add_items(watermelon)
my_cart.add_items(orange)
120.times {my_cart.add_items(watermelon)}

puts my_cart.calculate_total

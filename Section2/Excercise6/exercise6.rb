class MilkShakeShop
    def initialize
        @milkshakes = []
    end

    def add_milkshakes(milkshake)
        @milkshakes.push(milkshake)
    end

    def list_all_milkshakes
        @milkshakes.each do |milkshake|
            puts milkshake.name
            milkshake.ingredients.each do |ingredient|
                print "\t", ingredient.name, " ", ingredient.price
            end
            puts "\n"
            print "\tTotal price: ", milkshake.price_of_milkshake
            puts "\n"
        end
    end

    def price_of_all_milkshakes
        total = 0
        @milkshakes.each do |milkshake|
            total += milkshake.price_of_milkshake
        end

        print "Price of all milkshakes: ", total, "\n"
    end
end

class MilkShake
    attr_reader :name, :baseprice, :ingredients
    def initialize(name)
        @name = name
        @baseprice = 3 
        @ingredients = []
    end

    def add_ingredient(ingredient)
        @ingredients.push(ingredient)
    end

    def price_of_milkshake
        @totalprice = @baseprice
        for ingredient in @ingredients
            @totalprice += ingredient.price
        end
        @totalprice
    end
end

class Ingredient
    attr_reader :name, :price
    def initialize(name, price)
        @name = name
        @price = price
    end
end

banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate chips", 1)
strawberry = Ingredient.new("Strawberry", 2)
coconut = Ingredient.new("Coconut", 3)

nizars_milkshake = MilkShake.new("Nizar's shake")
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)

ondrejs_milkshake = MilkShake.new("Ondrej's shake")
ondrejs_milkshake.add_ingredient(strawberry)
ondrejs_milkshake.add_ingredient(coconut)

joshs_shake_shack = MilkShakeShop.new
joshs_shake_shack.add_milkshakes(ondrejs_milkshake)
joshs_shake_shack.add_milkshakes(nizars_milkshake)

joshs_shake_shack.list_all_milkshakes
joshs_shake_shack.price_of_all_milkshakes

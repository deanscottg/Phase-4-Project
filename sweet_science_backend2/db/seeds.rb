# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Boxer.destroy_all
Workout.destroy_all
Drill.destroy_all
puts "Seeded"
b1=Boxer.create(name:"Canelo",weight:168,experience:5,image:"https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3MDA4NjI3Mjk3NDk0MDI3/canelo-alvarez-mannix.jpg")
b2=Boxer.create(name:"Terrance",weight:147,experience:4,image:"https://imageio.forbes.com/specials-images/imageserve/5dcc5f84e0af7b0006b1404d/Terence-Crawford-v-Jeff-Horn/960x0.jpg?fit=bounds&format=jpg&width=960")
b3=Boxer.create(name:"Charles",weight:265,experience:1,image:"https://thespun.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-24-at-10.04.04-PM-775x465.png")
b4=Boxer.create(name:"Tom",weight:141,experience:3,image:"https://i.insider.com/6196a6eaa2e68800198aee1a?width=700")
b5=Boxer.create(name:"Michael B",weight:184,experience:3,image:"https://static.wikia.nocookie.net/fnl/images/2/2e/Michael_B_Jordan.png/revision/latest/top-crop/width/360/height/450?cb=20220311011518")



d1=Drill.create(
    name: "Heavy bag",
    rounds: 4,
    improves:"Power"
)
d2=Drill.create(
    name: "Jumprope",
    rounds: 6,
    improves:"Cardio",
)
d3=Drill.create(
    name: "Pad Work",
    rounds: 4,
    improves:"Technique",
)
d4=Drill.create(
    name: "Slipline",
    rounds: 2,
    improves:"Head Movement"
)
d5=Drill.create(
    name: "Medicine Ball toss",
    rounds: 2,
    improves:"Power"
)
d6=Drill.create(
    name: "Treadmill",
    rounds: 2,
    improves:"Cardio"
)
d7=Drill.create(
    name: "Shadow Boxing",
    rounds: 3,
    improves:"Technique"
)
d8=Drill.create(
    name: "Speed Bag",
    rounds: 2,
    improves:"Cardio"
)
Workout.create(date:"2022-02-20",boxer_id:b1.id,drill_id:d1.id,completion_level:3)
Workout.create(date:"2022-02-20",boxer_id:b1.id,drill_id:d3.id,completion_level:3)
Workout.create(date:"2022-02-20",boxer_id:b1.id,drill_id:d5.id,completion_level:3)
Workout.create(date:"2022-02-20",boxer_id:b1.id,drill_id:d8.id,completion_level:3)
Workout.create(date:"2022-02-27",boxer_id:b3.id,drill_id:d2.id,completion_level:1)
Workout.create(date:"2022-02-27",boxer_id:b3.id,drill_id:d1.id,completion_level:1)
Workout.create(date:"2022-02-29",boxer_id:b5.id,drill_id:d1.id,completion_level:4)
Workout.create(date:"2022-02-29",boxer_id:b5.id,drill_id:d4.id,completion_level:4)
Workout.create(date:"2022-02-29",boxer_id:b5.id,drill_id:d6.id,completion_level:4)
Workout.create(date:"2022-02-29",boxer_id:b5.id,drill_id:d8.id,completion_level:4)
Workout.create(date:"2022-03-01",boxer_id:b2.id,drill_id:d7.id,completion_level:5)
Workout.create(date:"2022-03-01",boxer_id:b2.id,drill_id:d4.id,completion_level:5)
Workout.create(date:"2022-03-01",boxer_id:b2.id,drill_id:d3.id,completion_level:5)
Workout.create(date:"2022-03-01",boxer_id:b2.id,drill_id:d5.id,completion_level:5)








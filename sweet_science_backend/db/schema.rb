# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_18_180401) do
  create_table "boxers", force: :cascade do |t|
    t.string "name"
    t.integer "weight"
    t.integer "experience"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "username"
  end

  create_table "drills", force: :cascade do |t|
    t.string "name"
    t.integer "rounds"
    t.string "improves"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "date"
    t.integer "boxer_id", null: false
    t.integer "drill_id"
    t.integer "completion_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["boxer_id"], name: "index_workouts_on_boxer_id"
    t.index ["drill_id"], name: "index_workouts_on_drill_id"
  end

  add_foreign_key "workouts", "boxers"
end

class CreateTitles < ActiveRecord::Migration
  def change
    create_table :titles do |t|
      t.string :value
      t.string :link
      t.boolean :real, :default => false
    end
  end
end

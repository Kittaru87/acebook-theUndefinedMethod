# frozen_string_literal: true

require 'rails_helper'

RSpec.feature 'Edit comments', type: :feature do
  before(:each) do
    sign_up
    submit_post
    first_comment
  end

  # scenario "Can edit your own comment" do
  #   click_button("Edit comment")
  #   fill_in "comment[comment]", with: "updated comment"
  #   click_button("Save Changes")

  #   expect(page).to have_content("updated comment")
  # end

  scenario "Cannot edit someone else's comment" do
    click_link 'Logout'
    sign_up_second_user
    click_button 'Edit Comment'

    expect(page).not_to have_button('Save Changes')
  end

  scenario 'user cannot edit a comment after 10 minutes' do
    Timecop.freeze(Time.now + 15.minutes) do
      first(:css, '.edit-comment-btn').click
      expect(page).not_to have_link 'Save Changes'
    end
  end
end

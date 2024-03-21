import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By

class PlayerProfilesTest(unittest.TestCase):
    driver = None

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.get("http://localhost:5173/player_profiles")

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # Test case -1

    def test_search_with_no_name(self):
        time.sleep(5)
        # Find the search button
        search_button = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div/div/div/button")

        # Click the search button without entering a player name
        search_button.click()

        # Wait for the toast message to appear
        time.sleep(2)

        # Check if the toast error message is displayed
        error_message = self.driver.find_element(By.CSS_SELECTOR, ".Toastify__toast-body")
        self.assertEqual(error_message.text, "Please Enter a Player Name to Search")
        print("TEST 1 PASSED")
        self.driver.refresh()
        time.sleep(5)

    # Test case - 2
    def test_page_title_(self):
        expected_title = "TalentScout | Frontend"
        actual_title = self.driver.title
        self.assertEqual(actual_title, expected_title,
                         f"Page title is incorrect: Expected '{expected_title}' but found '{actual_title}'")
        print("TEST 2 PASSED")
        self.driver.refresh()
        time.sleep(5)

    # Test case - 3
    def test_search_player(self):
        time.sleep(5)
        search_input = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div[1]/div/div/div/div/input")
        expected_result = search_input.send_keys("Player Name")
        time.sleep(5)  # Wait for dropdown to appear
        actual_result = search_input.send_keys(Keys.RETURN)
        self.assertEqual(actual_result, expected_result,
                         f"Page title is incorrect: Expected '{expected_result}' but found '{actual_result}'")
        search_input.clear()
        time.sleep(2)
        print("TEST 3 PASSED")
        self.driver.refresh()
        time.sleep(5)

    # Test case - 4
    def test_tab_navigation(self):
        # Check if tab navigation works correctly
        time.sleep(5)
        name1 = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div/div/div/div/input")
        name1.click()
        name1.send_keys("Dasun Dilshan")
        time.sleep(2)
        self.driver.find_element(By.XPATH, '/html/body/div/div/div[3]/div/div/div/div/div/div/div/div').click()
        searchButton = self.driver.find_element(By.XPATH, '/html/body/div/div/div[3]/div/div/div/div/div/button')
        searchButton.click()
        time.sleep(7)
        tabs = self.driver.find_element(By.XPATH,
                                        "/html/body/div/div/div[3]/div/div[2]/div[2]/div/div/div[1]/div/div/button[2]")
        tabs.click()
        self.assertTrue(tabs.get_attribute("class").find("active") != -1)
        print("TEST 4 PASSED")

    # Test case - 5
    def test_searching_a_player(self):
        time.sleep(5)
        search_input = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div[1]/div/div/div/div/input")
        expected_result = search_input.send_keys("Rahal Amarasinghe")
        time.sleep(2)
        select_dropdown = self.driver.find_element(By.XPATH,
                                                   '/html/body/div/div/div[3]/div/div[1]/div/div/div/div/div/div')
        select_dropdown.click()
        search_button = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div/div/div/button")

        # Click the search button without entering a player name
        search_button.click()
        time.sleep(5)
        # Wait for dropdown to appear
        name = self.driver.find_element(By.XPATH, "//div[contains(text(), 'Full Name')]")
        actual_result = name.text
        time.sleep(2)
        self.assertEqual(actual_result, "Full Name : Rahal Amarasinghe",
                         f"Page title is incorrect: Expected '{expected_result}' but found '{actual_result}'")
        print("TEST 5 PASSED")
        self.driver.refresh()
        time.sleep(5)


if __name__ == "__main__":
    unittest.main(verbosity=2)

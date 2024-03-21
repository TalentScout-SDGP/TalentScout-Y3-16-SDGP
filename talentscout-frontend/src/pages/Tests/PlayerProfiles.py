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




if __name__ == "__main__":
    unittest.main(verbosity=2)

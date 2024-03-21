import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


class TestExplorePlayers(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:5173/explore_players")

    def tearDown(self):
        self.driver.quit()

    # Test case - 1
    def test_page_access_restriction(self):
        """ Test Case to verify Access Restriction to the Explore Players page for users who have not logged in"""
        time.sleep(10)
        Expected_output = "Login to continue"
        restriction = self.driver.find_element(By.XPATH, '/html/body/div[2]/div/div/div/div/div/p[1]')
        self.assertEqual(restriction.text, Expected_output)
        print('TEST 1 PASSED')




if __name__ == "__main__":
    unittest.main()

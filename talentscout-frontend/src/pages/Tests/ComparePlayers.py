import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class TestComparePlayersSearch(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:5173/compare_players")

    def tearDown(self):
        self.driver.quit()

    # Test case -1
    def test_search_without_selecting_players(self):
        """ Test Case to verify Error notification when clicking compare button without selecting two players"""
        time.sleep(5)
        # Locate the Compare button
        compare_button = self.driver.find_element(By.XPATH, "//button[contains(text(),'Compare')]")

        # Click the Compare button
        compare_button.click()

        # Wait for the toast error message to appear
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text

        # Assert that the toast error message matches the expected message
        self.assertEqual(toast_message, "Please Select Two Players to Compare")
        print('TEST 1 PASSED')




if __name__ == "__main__":
    unittest.main()

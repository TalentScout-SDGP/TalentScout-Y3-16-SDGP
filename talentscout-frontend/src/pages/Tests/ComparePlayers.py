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

    # Test case - 2
    def test_searching_two_players(self):
        """ Test Case to verify that Searched players are getting loaded for Comparison"""
        time.sleep(5)
        search_input_1 = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/div[1]/input")
        expected_result_1 = search_input_1.send_keys("Rahal Amarasinghe")
        time.sleep(2)
        select_dropdown = self.driver.find_element(By.XPATH,
                                                   '/html/body/div/div/div[3]/div[1]/div/div/div/div[1]/div/div')
        select_dropdown.click()
        time.sleep(2)
        search_input_2 = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/div[2]/input")
        expected_result_2 = search_input_2.send_keys("B S N Kasun")
        time.sleep(2)
        select_dropdown = self.driver.find_element(By.XPATH,
                                                   '/html/body/div/div/div[3]/div[1]/div/div/div/div[2]/div/div')
        select_dropdown.click()
        compare_button = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")

        compare_button.click()
        time.sleep(5)
        # Wait for dropdown to appear
        name = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[2]/div[1]/div/div/div[1]/p")
        actual_result_1 = name.text
        time.sleep(2)
        self.assertEqual(actual_result_1, "Rahal Amarasinghe",
                         f"Page title is incorrect: Expected '{"Rahal Amarasinghe"}' but found '{actual_result_1}'")
        name_2 = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[2]/div[1]/div/div/div[3]/p")
        actual_result_2 = name_2.text
        time.sleep(2)
        self.assertEqual(actual_result_2, "B S N Kasun",
                         f"Page title is incorrect: Expected '{"B S N Kasun"}' but found '{actual_result_2}'")
        print("TEST 2 PASSED SUCCESSFULLY")
        self.driver.refresh()
        time.sleep(5)

    # Test case - 3
    def test_tab_navigation(self):
        """ Test Case to verify navigation across different statistics and formats in Comparison"""
        time.sleep(5)
        name1 = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/div[1]/input")
        name1.click()
        name1.send_keys("Dasun Dilshan")
        time.sleep(2)
        self.driver.find_element(By.XPATH, '/html/body/div/div/div[3]/div[1]/div/div/div/div[1]/div/div').click()
        name2 = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/div[2]/input")
        name2.click()
        name2.send_keys("Rahal Amarasinghe")
        self.driver.find_element(By.XPATH, '/html/body/div/div/div[3]/div[1]/div/div/div/div[2]/div/div').click()
        time.sleep(2)
        compButton = self.driver.find_element(By.XPATH, '/html/body/div/div/div[3]/div[1]/div/div/div/button')
        compButton.click()
        time.sleep(2)
        batting_tab = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Bowling')]")
        batting_tab.click()
        self.assertTrue(batting_tab.get_attribute("class").find("active") != -1)
        print("TEST 3 PASSED")




if __name__ == "__main__":
    unittest.main()

import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait


class ManagePlayersTest(unittest.TestCase):
    driver = None

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.get("http://localhost:5173")

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # Test case -1

    def test_page_access_restriction(self):
        """ Test Case to verify Access Restriction to the Manage Players page for the local users and unlogged users."""
        time.sleep(8)
        man_pg = self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div/div[2]/a[5]")
        man_pg.click()
        time.sleep(8)
        restriction_notification = self.driver.find_element(By.XPATH, '/html/body/div[2]/div/div/div/div/div/p')
        assert restriction_notification.is_displayed()
        print('TEST 1 PASSED')

    # Test case - 2
    def test_page_accessibility_to_admin_users(self):
        """ Test Case to verify Accessibility to the Manage Players page for admin users."""
        time.sleep(8)
        log_pg = self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div/div[3]/a[1]")
        log_pg.click()
        time.sleep(5)
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        man_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[5]')
        man_nav.click()
        time.sleep(2)

        cont = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div")
        assert cont.is_displayed()
        print('TEST 2 PASSED')

    # Test case - 3
    def test_search_with_no_inputs(self):
        """ Test Case to verify error handling when clicking search without selecting a player"""
        time.sleep(8)
        log_pg = self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div/div[3]/a[1]")
        log_pg.click()
        time.sleep(5)
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        man_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[5]')
        man_nav.click()
        time.sleep(2)
        search = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")
        search.click()
        time.sleep(5)
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text

        # Assert that the toast error message matches the expected message
        self.assertEqual(toast_message, "Please enter a player name to search.")
        print('TEST 3 PASSED')




if __name__ == "__main__":
    unittest.main(verbosity=2)

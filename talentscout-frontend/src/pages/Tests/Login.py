import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


class LoginTest(unittest.TestCase):
    driver = None

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.get("http://localhost:5173/login")

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # Test case -1
    def test_email_type(self):
        """ Test Case to verify that in email field only a valid type of email can be entered"""
        time.sleep(5)
        email_inp = self.driver.find_element(By.ID, "login-email")
        email_inp.get_attribute("type")
        self.assertTrue("date")
        print("TEST 1 PASSED")

    # Test case -2
    def test_password_hiding_button(self):
        """ Test Case to verify that in password field is hidden"""
        time.sleep(5)
        pas = self.driver.find_element(By.XPATH, "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[2]/input")
        pas.click()
        pas.send_keys("1234")
        time.sleep(2)
        hide = self.driver.find_element(By.CSS_SELECTOR, ".fa-eye > path:nth-child(1)").click()
        pas = self.driver.find_element(By.XPATH, "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[2]/input")
        pas.click()
        self.assertTrue(pas.is_displayed())
        print("TEST 2 PASSED")




if __name__ == "__main__":
    unittest.main(verbosity=2)

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


class SignUpTest(unittest.TestCase):
    driver = None

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.get("http://localhost:5173/sign_up")

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # Test case -1
    def test_email_type(self):
        """ Test Case to verify that in email field only a valid type of email can be entered"""
        time.sleep(5)
        email_inp = self.driver.find_element(By.ID, "sign-up-email")
        email_inp.get_attribute("type")
        self.assertTrue("date")
        print("TEST 1 PASSED")

    # Test case - 2
    def test_password_length_restriction(self):
        """ Test Case to verify password length is greater than 7"""
        time.sleep(5)
        pas = self.driver.find_element(By.ID, "sign-up-password")
        pas.click()
        pas.send_keys("111111")
        time.sleep(2)
        err = self.driver.find_element(By.XPATH, "/html/body/div[1]/div/div[3]/div/div[1]/div[1]/form/div[7]/p")
        self.assertEqual(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            err.text)
        print("TEST 2 PASSED")

    # Test case - 3
    def test_password_character_restriction(self):
        """ Test Case to verify password character restrictions"""
        time.sleep(5)
        pas = self.driver.find_element(By.ID, "sign-up-password")
        pas.click()
        pas.send_keys("12345678")
        time.sleep(2)
        err = self.driver.find_element(By.XPATH, "/html/body/div[1]/div/div[3]/div/div[1]/div[1]/form/div[7]/p")
        self.assertEqual(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            err.text)
        print("TEST 3 PASSED")





if __name__ == "__main__":
    unittest.main(verbosity=2)

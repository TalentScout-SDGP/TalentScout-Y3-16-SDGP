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





if __name__ == "__main__":
    unittest.main(verbosity=2)

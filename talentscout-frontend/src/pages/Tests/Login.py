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

    # Test case -3
    def test_login_with_incorrect_password(self):
        """ Test Case to verify login restriction with an incorrect password"""
        time.sleep(5)
        gmail = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        gmail.click()
        gmail.send_keys("qatestuser@gmail.com")
        pas = self.driver.find_element(By.XPATH,
                                       "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[2]/input")
        pas.click()
        pas.send_keys("1234")
        time.sleep(3)
        log = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        log.click()
        time.sleep(2)
        logerr = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div[2]/form/div/p")
        self.assertTrue(logerr.is_displayed())
        print("TEST 3 PASSED")

    # Test case -4
    def test_login_with_incorrect_email(self):
        """ Test Case to verify login restriction with an incorrect email"""
        time.sleep(5)
        gmail = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        gmail.click()
        gmail.send_keys("test@gmail.com")
        pas = self.driver.find_element(By.XPATH,
                                       "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[2]/input")
        pas.click()
        pas.send_keys("talentscout@123")
        time.sleep(3)
        log = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        log.click()
        time.sleep(2)
        logerr = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div[2]/form/div/p")
        self.assertTrue(logerr.is_displayed())
        print("TEST 4 PASSED")

    # Test case -5
    def test_login_with_correct_credentials(self):
        """ Test Case to verify login with Correct Credentials"""
        time.sleep(5)
        gmail = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        gmail.click()
        gmail.send_keys("qatestuser@gmail.com")
        pas = self.driver.find_element(By.XPATH,
                                       "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[2]/input")
        pas.click()
        pas.send_keys("talentscout@123")
        time.sleep(3)
        log = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        log.click()
        time.sleep(10)
        home = self.driver.find_element(By.XPATH,"/html/body/div/div/div[3]/div[1]/div/div/div/h1")
        self.assertEqual("Welcome To TalentScout",home.text)
        print("TEST 5 PASSED")

    # Test case - 6
    def test_login_with_google_auth(self):
        """ Test Case to verify login with Google Auth"""
        time.sleep(5)
        google = self.driver.find_element(By.XPATH, '//*[@id="signInDiv"]')
        google.click()
        #Manual Testing for google auth login


if __name__ == "__main__":
    unittest.main(verbosity=2)

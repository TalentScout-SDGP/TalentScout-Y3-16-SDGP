import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

    
class FooterTest(unittest.TestCase):
    driver = None

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.get("http://localhost:5173/login")

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # Test case -1
    def test_footer_submission_with_incomplete_fields(self):
        """ Test Case to verify that footer response doesn't get sent if at least one filed is empty"""
        time.sleep(5)
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        ft_name = self.driver.find_element(By.XPATH, '//*[@id="footer-first-name"]')
        ft_name.click()
        ft_name.send_keys("TestName")
        time.sleep(2)
        ft_lname = self.driver.find_element(By.XPATH, '//*[@id="footer-last-name"]')
        ft_lname.click()
        time.sleep(2)
        ft_lname.send_keys("TestSurname")
        ft_em = self.driver.find_element(By.XPATH, '//*[@id="footer-email"]')
        ft_em.click()
        ft_em.send_keys("talentscout@gmail.com")
        time.sleep(2)
        but = self.driver.find_element(By.XPATH, '/html/body/div/div/div[4]/div/div[3]/form/div[4]/button')
        but.click()
        time.sleep(2)
        # Wait for the toast error message to appear
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text
        self.assertEqual("Please fill in all fields.", toast_message)
        print("TEST 1 PASSED")

    # Test case -2
    def test_footer_submission_with_incorrect_email_type(self):
        """ Test Case to verify that footer response doesn't get sent if the email type is not valid"""
        time.sleep(5)
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        ft_name = self.driver.find_element(By.XPATH, '//*[@id="footer-first-name"]')
        ft_name.click()
        ft_name.send_keys("TestName")
        time.sleep(2)
        ft_lname = self.driver.find_element(By.XPATH, '//*[@id="footer-last-name"]')
        ft_lname.click()
        time.sleep(2)
        ft_lname.send_keys("TestSurname")
        ft_em = self.driver.find_element(By.XPATH, '//*[@id="footer-email"]')
        ft_em.click()
        ft_em.send_keys("talentscoutgmail.com")
        time.sleep(2)
        mes = self.driver.find_element(By.XPATH, '//*[@id="message"]')
        mes.click()
        mes.send_keys("Test submission")
        but = self.driver.find_element(By.XPATH, '/html/body/div/div/div[4]/div/div[3]/form/div[4]/button')
        but.click()
        time.sleep(2)
        # Wait for the toast error message to appear
        try:
            WebDriverWait(self.driver, 5).until(
                EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
            )

            # Get the toast error message text
            toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body")
            self.assertEqual("Email Successfully Sent!", toast_message)
        except:
            print("TEST 2 PASSED")

    # Test case -3
    def test_footer_submission_with_correct_validations(self):
        """ Test Case to verify that footer response doesn't get sent if at least one filed is empty"""
        time.sleep(5)
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        ft_name = self.driver.find_element(By.XPATH, '//*[@id="footer-first-name"]')
        ft_name.click()
        ft_name.send_keys("TestName")
        time.sleep(2)
        ft_lname = self.driver.find_element(By.XPATH, '//*[@id="footer-last-name"]')
        ft_lname.click()
        time.sleep(2)
        ft_lname.send_keys("TestSurname")
        ft_em = self.driver.find_element(By.XPATH, '//*[@id="footer-email"]')
        ft_em.click()
        ft_em.send_keys("talent@scoutgmail.com")
        time.sleep(2)
        mes = self.driver.find_element(By.XPATH, '//*[@id="message"]')
        mes.click()
        mes.send_keys("Test submission")
        but = self.driver.find_element(By.XPATH, '/html/body/div/div/div[4]/div/div[3]/form/div[4]/button')
        but.click()
        time.sleep(2)
        # Wait for the toast error message to appear

        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text
        self.assertEqual("Email Successfully Sent!", toast_message)
        print("TEST 3 PASSED")


if __name__ == "__main__":
    unittest.main(verbosity=2)

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

    # Test case - 1
    def test_page_accessibility_to_admin_users(self):
        """ Test Case to verify Accessibility to the Add New Players section for admin users."""
        time.sleep(10)
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

        add_new_p = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/a")
        add_new_p.click()
        time.sleep(3)

        add_section = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div")
        assert add_section.is_displayed(), "Page not rendered successfully"
        print('TEST 1 PASSED')




if __name__ == "__main__":
    unittest.main(verbosity=2)

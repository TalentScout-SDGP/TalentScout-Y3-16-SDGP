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




if __name__ == "__main__":
    unittest.main(verbosity=2)

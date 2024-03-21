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

    # Test case - 4
    def test_player_retrieval_from_search(self):
        """ Test Case to verify that searched players are loaded to the system"""
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
        search_inp = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/input")
        search_inp.click()
        expected_player = 'Pinnaduwage Wanindu Hasaranga de Silva'
        search_inp.send_keys(expected_player)
        time.sleep(3)
        search = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")
        search.click()
        time.sleep(5)
        actual_output_player = self.driver.find_element(By.XPATH,
                                                        "/html/body/div/div/div[3]/div[2]/div/div[2]/div[2]/div[2]")
        self.assertEqual(expected_player, actual_output_player.text)
        print("TEST 4 PASSED")

    # Test case - 5
    def test_player_edit_restrictions(self):
        """ Test Case to verify access restriction to edit or delete players who are not added to the system by the
        logged in user"""
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
        search_inp = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/input")
        search_inp.click()
        search_inp.send_keys('Kusal Janith')
        time.sleep(3)
        search = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")
        search.click()
        time.sleep(10)
        edit = self.driver.find_element(By.CSS_SELECTOR, "svg.text-xl:nth-child(1)")
        cursor_property = edit.value_of_css_property("cursor")
        assert cursor_property == "not-allowed", "Cursor is not set to not-allowed"
        print('TEST 5 PASSED')

    # Test case - 6
    def test_player_delete_restrictions(self):
        """ Test Case to verify access restriction to edit or delete players who are not added to the system by the
        logged in user"""
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
        search_inp = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/input")
        search_inp.click()
        search_inp.send_keys('Kusal Janith')
        time.sleep(3)
        search = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")
        search.click()
        time.sleep(10)
        edit = self.driver.find_element(By.CSS_SELECTOR, "svg.text-xl:nth-child(2)")
        cursor_property = edit.value_of_css_property("cursor")
        assert cursor_property == "not-allowed", "Cursor is not set to not-allowed"
        print('TEST 6 PASSED')

    # Test case - 7
    def test_player_info_edit_function(self):
        """ Test Case to verify access to edit a player created by the logged in admin"""
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
        search_inp = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/input")
        search_inp.click()
        search_inp.send_keys('Test Playerone')
        time.sleep(3)
        search = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")
        search.click()
        time.sleep(10)
        edit = self.driver.find_element(By.CSS_SELECTOR, "svg.text-xl:nth-child(1)")
        edit.click()
        time.sleep(2)
        edit_name = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[1]/input")
        edit_name.click()
        edit_name.clear()
        edited_name = "Test Player Edited"
        edit_name.send_keys(edited_name)
        time.sleep(2)
        cont = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[4]/button")
        cont.click()
        time.sleep(2)
        time.sleep(10)
        sub = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[2]/button")
        sub.click()
        time.sleep(2)

        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text

        # Assert that the toast error message matches the expected message
        self.assertEqual(toast_message, "Player Updated Successfully!")
        print("TEST 7 PASSED")

    # Test case - 8
    def test_player_stat_edit_function(self):
        """ Test Case to verify access to edit a player created by the logged in admin"""
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
        search_inp = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/input")
        search_inp.click()
        search_inp.send_keys('Test Playerone')
        time.sleep(3)
        search = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/button")
        search.click()
        time.sleep(10)
        edit = self.driver.find_element(By.CSS_SELECTOR, "svg.text-xl:nth-child(1)")
        edit.click()
        time.sleep(2)
        edit_mat = self.driver.find_element(By.XPATH,
                                            "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[1]/input")
        edit_mat.click()
        edit_mat.clear()
        edit_mat.send_keys(13)
        cont = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[4]/button")
        cont.click()
        time.sleep(2)
        time.sleep(10)
        sub = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[2]/button")
        sub.click()
        time.sleep(2)

        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text

        # Assert that the toast error message matches the expected message
        self.assertEqual(toast_message, "Player Updated Successfully!")
        print("TEST 8 PASSED")




if __name__ == "__main__":
    unittest.main(verbosity=2)

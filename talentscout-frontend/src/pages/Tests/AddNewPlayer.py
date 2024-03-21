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

    # Test case - 2
    def test_continuing_player_profileInfo_with_empty_required_fields(self):
        """ Test Case to verify error handling when submiting in Player profile section by keeping at least one
        required field empty"""
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

        add_new_p = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/a")
        add_new_p.click()
        time.sleep(3)
        fname = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[1]/input")
        fname.click()
        fname.send_keys("Test Player 1")
        time.sleep(1)
        alsKnown = self.driver.find_element(By.XPATH,
                                            "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[2]/input")
        alsKnown.click()
        alsKnown.send_keys("T P 1")
        time.sleep(1)
        bdate = self.driver.find_element(By.XPATH,
                                         "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[1]/input")
        bdate.click()
        bdate.send_keys("2222002")
        time.sleep(1)
        bstyle = self.driver.find_element(By.XPATH,
                                          "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[3]/select")
        bstyle.click()
        batOpt = self.driver.find_element(By.XPATH,
                                          "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[3]/select/option[2]")
        batOpt.click()
        time.sleep(2)
        bowlstyle = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[4]/select")
        bowlstyle.click()
        bowlOpt = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[4]/select/option[4]")
        bowlOpt.click()
        time.sleep(2)
        # not selecting the playing role and clicking continue
        contBut = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[4]/button")
        contBut.click()
        time.sleep(1)
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text
        self.assertEqual(toast_message, "Please fill in all the required fields (*).")
        print('TEST 2 PASSED')

    # Test case -3
    def test_player_info_addition(self):
        """ Test Case to verify error handling when submitting in Player profile section by keeping at least one
        required field empty"""
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

        add_new_p = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/a")
        add_new_p.click()
        time.sleep(3)
        fname = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[1]/input")
        fname.click()
        fname.send_keys("Test Player 1")
        time.sleep(1)
        alsKnown = self.driver.find_element(By.XPATH,
                                            "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[2]/input")
        alsKnown.click()
        alsKnown.send_keys("T P 1")
        time.sleep(1)
        bdate = self.driver.find_element(By.XPATH,
                                         "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[1]/input")
        bdate.click()
        bdate.send_keys("2222002")
        time.sleep(1)
        bstyle = self.driver.find_element(By.XPATH,
                                          "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[3]/select")
        bstyle.click()
        batOpt = self.driver.find_element(By.XPATH,
                                          "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[3]/select/option[2]")
        batOpt.click()
        time.sleep(2)
        bowlstyle = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[4]/select")
        bowlstyle.click()
        bowlOpt = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[4]/select/option[4]")
        bowlOpt.click()
        time.sleep(2)
        plyRole = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[2]/select")
        plyRole.click()
        roleOpt = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[2]/select/option[4]")
        roleOpt.click()
        time.sleep(2)
        # not selecting the playing role and clicking continue
        contBut = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[4]/button")
        contBut.click()
        time.sleep(1)
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text
        self.assertEqual(toast_message, "Player Info added, Proceed to add Player Stats.")
        print('TEST 3 PASSED')

    # Test Case - 4
    def test_navigation_through_formats_in_stats(self):
        """ Test Case to validate that admin user can navigate through all tabs to add stats for different formats"""
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

        add_new_p = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/a")
        add_new_p.click()
        time.sleep(3)
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        wkTab = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[2]/div/div/div[2]/button[3]")
        wkTab.click()
        time.sleep(2)
        self.assertTrue(wkTab.get_attribute("class").find("active") != -1)
        wkEle = self.driver.find_element(By.XPATH,
                                         "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[4]/label")
        self.assertTrue("Stumping:", wkEle.text)
        time.sleep(3)
        print('TEST 4 PASSED')

    # Test case -5
    def test_adding_a_full_player_with_stats(self):
        """ Test Case to validate that Admin user can add a player with stats to the system"""
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

        add_new_p = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div[1]/div/div/div/a")
        add_new_p.click()
        time.sleep(3)
        fname = self.driver.find_element(By.XPATH,
                                         "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[1]/input")
        fname.click()
        fname.send_keys("Test Playerone")
        time.sleep(1)
        alsKnown = self.driver.find_element(By.XPATH,
                                            "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[2]/input")
        alsKnown.click()
        alsKnown.send_keys("TP")
        time.sleep(1)
        bdate = self.driver.find_element(By.XPATH,
                                         "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[1]/input")
        bdate.click()
        bdate.send_keys("2222002")
        time.sleep(1)
        bstyle = self.driver.find_element(By.XPATH,
                                          "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[3]/select")
        bstyle.click()
        batOpt = self.driver.find_element(By.XPATH,
                                          "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[3]/select/option[2]")
        batOpt.click()
        time.sleep(2)
        bowlstyle = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[4]/select")
        bowlstyle.click()
        bowlOpt = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[4]/select/option[4]")
        bowlOpt.click()
        time.sleep(2)
        plyRole = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[2]/select")
        plyRole.click()
        roleOpt = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[3]/div[2]/select/option[4]")
        roleOpt.click()
        time.sleep(2)
        # not selecting the playing role and clicking continue

        # Adding stats
        matches = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[1]/input")
        matches.click()
        matches.clear()
        matches.send_keys(10)
        time.sleep(2)

        runs = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[2]/input")
        runs.click()
        runs.clear()
        runs.send_keys(177)
        time.sleep(3)

        # runs = self.driver.find_element(By.XPATH,
        #                                 "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[2]/input")
        # runs.click()
        # runs.clear()
        # runs.send_keys(200)
        #
        # average = self.driver.find_element(By.XPATH,
        #                                    "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[2]/input")
        # average.click()
        # average.clear()
        # average.send_keys(24)
        #
        # fifties = self.driver.find_element(By.XPATH,
        #                                    "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[10]/input")
        # fifties.click()
        # fifties.clear()
        # fifties.send_keys(2)
        #
        # hundreds = self.driver.find_element(By.XPATH,
        #                                     "/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[1]/div/div[9]/input")
        # hundreds.click()
        # hundreds.clear()
        # hundreds.send_keys(1)
        # time.sleep(2)

        contBut = self.driver.find_element(By.XPATH,
                                           "/html/body/div/div/div[3]/div[1]/div/div/div[2]/form/div[4]/button")
        contBut.click()
        time.sleep(20)

        submit_button = self.driver.find_element(By.XPATH,"/html/body/div/div/div[3]/div[2]/div/div/div[3]/form/div[2]/button")
        submit_button.click()
        time.sleep(4)

        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )
        toast_message_2 = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text
        self.assertEqual(toast_message_2, "Player Created Successfully.")
        print('TEST 5 PASSED')


if __name__ == "__main__":
    unittest.main(verbosity=2)
